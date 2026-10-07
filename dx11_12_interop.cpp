#include "dx11_12_interop.h"
#include "vulkan_core.h"
#include <d3d11.h>
#include <d3d12.h>


namespace DXInterop {
    VkImage vkSharedImage = VK_NULL_HANDLE;
    VkDeviceMemory vkSharedMemory = VK_NULL_HANDLE;
    HANDLE sharedNtHandle = nullptr;
    bool isInitialized = false;


    uint32_t FindMemoryType(uint32_t typeFilter, VkMemoryPropertyFlags properties) {
        VkPhysicalDeviceMemoryProperties memProperties;
        vkGetPhysicalDeviceMemoryProperties(g_VkCtx.physicalDevice, &memProperties);
        for (uint32_t i = 0; i < memProperties.memoryTypeCount; i++) {
            if ((typeFilter & (1 << i)) && (memProperties.memoryTypes[i].propertyFlags & properties) == properties) {
                return i;
            }
        }
        return 0;
    }


    bool SetupD3D11Interop(ID3D11Resource* resource, UINT width, UINT height) {
        ID3D11Device* d3d11Device = nullptr;
        resource->GetDevice(&d3d11Device);
        if (!d3d11Device) return false;


        IDXGIResource1* dxgiResource = nullptr;
        if (FAILED(resource->QueryInterface(__uuidof(IDXGIResource1), (void**)&dxgiResource))) {
            d3d11Device->Release();
            return false;
        }


        if (FAILED(dxgiResource->CreateSharedHandle(nullptr, DXGI_SHARED_RESOURCE_READ | DXGI_SHARED_RESOURCE_WRITE, nullptr, &sharedNtHandle))) {
            dxgiResource->Release();
            d3d11Device->Release();
            return false;
        }


        dxgiResource->Release();
        d3d11Device->Release();
        return true;
    }


    bool InitializeFromSwapChain(IDXGISwapChain* pSwapChain) {
        if (isInitialized) return true;


        if (!VulkanCore::Initialize()) return false;


        ID3D11Texture2D* backBuffer11 = nullptr;
        ID3D12Resource* backBuffer12 = nullptr;
        UINT width = 0, height = 0;


        if (SUCCEEDED(pSwapChain->GetBuffer(0, __uuidof(ID3D11Texture2D), (void**)&backBuffer11))) {
            D3D11_TEXTURE2D_DESC desc;
            backBuffer11->GetDesc(&desc);
            width = desc.Width;
            height = desc.Height;
            bool success = SetupD3D11Interop(backBuffer11, width, height);
            backBuffer11->Release();
            if (!success) return false;
        } 
        else if (SUCCEEDED(pSwapChain->GetBuffer(0, __uuidof(ID3D12Resource), (void**)&backBuffer12))) {
            D3D12_RESOURCE_DESC desc = backBuffer12->GetDesc();
            width = (UINT)desc.Width;
            height = (UINT)desc.Height;
            ID3D12Device* d3d12Device = nullptr;
            backBuffer12->GetDevice(__uuidof(ID3D12Device), (void**)&d3d12Device);
            if (!d3d12Device) { backBuffer12->Release(); return false; }
            
            if (FAILED(d3d12Device->CreateSharedHandle(backBuffer12, nullptr, GENERIC_ALL, nullptr, &sharedNtHandle))) {
                d3d12Device->Release();
                backBuffer12->Release();
                return false;
            }
            d3d12Device->Release();
            backBuffer12->Release();
        } else {
            return false;
        }


        VkExternalMemoryImageCreateInfoKHR externalImageInfo{};
        externalImageInfo.sType = VK_STRUCTURE_TYPE_EXTERNAL_MEMORY_IMAGE_CREATE_INFO_KHR;
        externalImageInfo.handleTypes = VK_EXTERNAL_MEMORY_HANDLE_TYPE_D3D11_TEXTURE_BIT;


        VkImageCreateInfo imageInfo{};
        imageInfo.sType = VK_STRUCTURE_TYPE_IMAGE_CREATE_INFO;
        imageInfo.pNext = &externalImageInfo;
        imageInfo.imageType = VK_IMAGE_TYPE_2D;
        imageInfo.format = VK_FORMAT_R8G8B8A8_UNORM;
        imageInfo.extent.width = width;
        imageInfo.extent.height = height;
        imageInfo.extent.depth = 1;
        imageInfo.mipLevels = 1;
        imageInfo.arrayLayers = 1;
        imageInfo.samples = VK_SAMPLE_COUNT_1_BIT;
        imageInfo.tiling = VK_IMAGE_TILING_OPTIMAL;
        imageInfo.usage = VK_IMAGE_USAGE_COLOR_ATTACHMENT_BIT | VK_IMAGE_USAGE_TRANSFER_DST_BIT;
        imageInfo.sharingMode = VK_SHARING_MODE_EXCLUSIVE;
        imageInfo.initialLayout = VK_IMAGE_LAYOUT_UNDEFINED;


        if (vkCreateImage(g_VkCtx.device, &imageInfo, nullptr, &vkSharedImage) != VK_SUCCESS) return false;


        VkMemoryRequirements memRequirements;
        vkGetImageMemoryRequirements(g_VkCtx.device, vkSharedImage, &memRequirements);


        VkImportMemoryWin32HandleInfoKHR importHandleInfo{};
        importHandleInfo.sType = VK_STRUCTURE_TYPE_IMPORT_MEMORY_WIN32_HANDLE_INFO_KHR;
        importHandleInfo.handleType = VK_EXTERNAL_MEMORY_HANDLE_TYPE_D3D11_TEXTURE_BIT;
        importHandleInfo.handle = sharedNtHandle;


        VkMemoryAllocateInfo allocInfo{};
        allocInfo.sType = VK_STRUCTURE_TYPE_MEMORY_ALLOCATE_INFO;
        allocInfo.pNext = &importHandleInfo;
        allocInfo.allocationSize = memRequirements.size;
        allocInfo.memoryTypeIndex = FindMemoryType(memRequirements.memoryTypeBits, VK_MEMORY_PROPERTY_DEVICE_LOCAL_BIT);


        if (vkAllocateMemory(g_VkCtx.device, &allocInfo, nullptr, &vkSharedMemory) != VK_SUCCESS) return false;


        vkBindImageMemory(g_VkCtx.device, vkSharedImage, vkSharedMemory, 0);
        isInitialized = true;
        return true;
    }


    void ProcessFrame() {
        if (!isInitialized) return;


        VkCommandBufferBeginInfo beginInfo{};
        beginInfo.sType = VK_STRUCTURE_TYPE_COMMAND_BUFFER_BEGIN_INFO;
        beginInfo.flags = VK_COMMAND_BUFFER_USAGE_ONE_TIME_SUBMIT_BIT;
        vkBeginCommandBuffer(g_VkCtx.commandBuffer, &beginInfo);


        VkImageMemoryBarrier barrier{};
        barrier.sType = VK_STRUCTURE_TYPE_IMAGE_MEMORY_BARRIER;
        barrier.oldLayout = VK_IMAGE_LAYOUT_UNDEFINED;
        barrier.newLayout = VK_IMAGE_LAYOUT_GENERAL;
        barrier.srcAccessMask = 0;
        barrier.dstAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;
        barrier.image = vkSharedImage;
        barrier.subresourceRange.aspectMask = VK_IMAGE_ASPECT_COLOR_BIT;
        barrier.subresourceRange.levelCount = 1;
        barrier.subresourceRange.layerCount = 1;


        vkCmdPipelineBarrier(g_VkCtx.commandBuffer, VK_PIPELINE_STAGE_TOP_OF_PIPE_BIT, VK_PIPELINE_STAGE_TRANSFER_BIT, 0, 0, nullptr, 0, nullptr, 1, &barrier);


        VkClearColorValue clearColor = {{0.1f, 0.4f, 0.8f, 1.0f}}; // Unique pipeline clear to verify Education context execution
        VkImageSubresourceRange range{ VK_IMAGE_ASPECT_COLOR_BIT, 0, 1, 0, 1 };
        vkCmdClearColorImage(g_VkCtx.commandBuffer, vkSharedImage, VK_IMAGE_LAYOUT_GENERAL, &clearColor, 1, &range);


        barrier.oldLayout = VK_IMAGE_LAYOUT_GENERAL;
        barrier.newLayout = VK_IMAGE_LAYOUT_PRESENT_SRC_KHR;
        barrier.srcAccessMask = VK_ACCESS_TRANSFER_WRITE_BIT;
        barrier.dstAccessMask = 0;
        vkCmdPipelineBarrier(g_VkCtx.commandBuffer, VK_PIPELINE_STAGE_TRANSFER_BIT, VK_PIPELINE_STAGE_BOTTOM_OF_PIPE_BIT, 0, 0, nullptr, 0, nullptr, 1, &barrier);


        vkEndCommandBuffer(g_VkCtx.commandBuffer);


        VkSubmitInfo submitInfo{};
        submitInfo.sType = VK_STRUCTURE_TYPE_SUBMIT_INFO;
        submitInfo.commandBufferCount = 1;
        submitInfo.pCommandBuffers = &g_VkCtx.commandBuffer;


        vkQueueSubmit(g_VkCtx.queue, 1, &submitInfo, VK_NULL_HANDLE);
        vkQueueWaitIdle(g_VkCtx.queue);
    }


    void Uninitialize() {
        if (!isInitialized) return;
        if (vkSharedImage != VK_NULL_HANDLE) vkDestroyImage(g_VkCtx.device, vkSharedImage, nullptr);
        if (vkSharedMemory != VK_NULL_HANDLE) vkFreeMemory(g_VkCtx.device, vkSharedMemory, nullptr);
        if (sharedNtHandle) CloseHandle(sharedNtHandle);
        isInitialized = false;
    }
}