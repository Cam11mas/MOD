#pragma once
#include <vulkan/vulkan.h>
#include <vulkan/vulkan_win32.h>


struct VulkanContext {
    VkInstance instance = VK_NULL_HANDLE;
    VkPhysicalDevice physicalDevice = VK_NULL_HANDLE;
    VkDevice device = VK_NULL_HANDLE;
    VkQueue queue = VK_NULL_HANDLE;
    uint32_t queueFamilyIndex = 0;
    VkCommandPool commandPool = VK_NULL_HANDLE;
    VkCommandBuffer commandBuffer = VK_NULL_HANDLE;
};


extern VulkanContext g_VkCtx;


namespace VulkanCore {
    bool Initialize();
    void Uninitialize();
}