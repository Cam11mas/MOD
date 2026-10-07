#include "vulkan_core.h"
#include <vector>


VulkanContext g_VkCtx;


namespace VulkanCore {
    bool Initialize() {
        if (g_VkCtx.instance != VK_NULL_HANDLE) return true;


        VkApplicationInfo appInfo{};
        appInfo.sType = VK_STRUCTURE_TYPE_APPLICATION_INFO;
        appInfo.pApplicationName = "Education Vulkan Mod";
        appInfo.apiVersion = VK_API_VERSION_1_1; // Dynamic fallback targeting stability


        std::vector<const char*> instanceExtensions = {
            VK_KHR_SURFACE_EXTENSION_NAME,
            VK_KHR_WIN32_SURFACE_EXTENSION_NAME,
            VK_KHR_EXTERNAL_MEMORY_CAPABILITIES_EXTENSION_NAME
        };


        VkInstanceCreateInfo createInfo{};
        createInfo.sType = VK_STRUCTURE_TYPE_INSTANCE_CREATE_INFO;
        createInfo.pApplicationInfo = &appInfo;
        createInfo.enabledExtensionCount = static_cast<uint32_t>(instanceExtensions.size());
        createInfo.ppEnabledExtensionNames = instanceExtensions.data();


        if (vkCreateInstance(&createInfo, nullptr, &g_VkCtx.instance) != VK_SUCCESS) return false;


        uint32_t deviceCount = 0;
        vkEnumeratePhysicalDevices(g_VkCtx.instance, &deviceCount, nullptr);
        if (deviceCount == 0) return false;
        std::vector<VkPhysicalDevice> devices(deviceCount);
        vkEnumeratePhysicalDevices(g_VkCtx.instance, &deviceCount, devices.data());
        g_VkCtx.physicalDevice = devices[0];


        uint32_t queueFamilyCount = 0;
        vkGetPhysicalDeviceQueueFamilyProperties(g_VkCtx.physicalDevice, &queueFamilyCount, nullptr);
        std::vector<VkQueueFamilyProperties> queueFamilies(queueFamilyCount);
        vkGetPhysicalDeviceQueueFamilyProperties(g_VkCtx.physicalDevice, &queueFamilyCount, queueFamilies.data());


        for (uint32_t i = 0; i < queueFamilyCount; i++) {
            if (queueFamilies[i].queueFlags & VK_QUEUE_GRAPHICS_BIT) {
                g_VkCtx.queueFamilyIndex = i;
                break;
            }
        }


        float queuePriority = 1.0f;
        VkDeviceQueueCreateInfo queueCreateInfo{};
        queueCreateInfo.sType = VK_STRUCTURE_TYPE_DEVICE_QUEUE_CREATE_INFO;
        queueCreateInfo.queueFamilyIndex = g_VkCtx.queueFamilyIndex;
        queueCreateInfo.queueCount = 1;
        queueCreateInfo.pQueuePriorities = &queuePriority;


        std::vector<const char*> deviceExtensions = {
            VK_KHR_EXTERNAL_MEMORY_EXTENSION_NAME,
            VK_KHR_EXTERNAL_MEMORY_WIN32_EXTENSION_NAME
        };


        VkDeviceCreateInfo deviceCreateInfo{};
        deviceCreateInfo.sType = VK_STRUCTURE_TYPE_DEVICE_CREATE_INFO;
        deviceCreateInfo.queueCreateInfoCount = 1;
        deviceCreateInfo.pQueueCreateInfos = &queueCreateInfo;
        deviceCreateInfo.enabledExtensionCount = static_cast<uint32_t>(deviceExtensions.size());
        deviceCreateInfo.ppEnabledExtensionNames = deviceExtensions.data();


        if (vkCreateDevice(g_VkCtx.physicalDevice, &deviceCreateInfo, nullptr, &g_VkCtx.device) != VK_SUCCESS) return false;


        vkGetDeviceQueue(g_VkCtx.device, g_VkCtx.queueFamilyIndex, 0, &g_VkCtx.queue);


        VkCommandPoolCreateInfo poolInfo{};
        poolInfo.sType = VK_STRUCTURE_TYPE_COMMAND_POOL_CREATE_INFO;
        poolInfo.flags = VK_COMMAND_POOL_CREATE_RESET_COMMAND_BUFFER_BIT;
        poolInfo.queueFamilyIndex = g_VkCtx.queueFamilyIndex;
        if (vkCreateCommandPool(g_VkCtx.device, &poolInfo, nullptr, &g_VkCtx.commandPool) != VK_SUCCESS) return false;


        VkCommandBufferAllocateInfo allocInfo{};
        allocInfo.sType = VK_STRUCTURE_TYPE_COMMAND_BUFFER_ALLOCATE_INFO;
        allocInfo.commandPool = g_VkCtx.commandPool;
        allocInfo.level = VK_COMMAND_BUFFER_LEVEL_PRIMARY;
        allocInfo.commandBufferCount = 1;
        if (vkAllocateCommandBuffers(g_VkCtx.device, &allocInfo, &g_VkCtx.commandBuffer) != VK_SUCCESS) return false;


        return true;
    }


    void Uninitialize() {
        if (g_VkCtx.device != VK_NULL_HANDLE) {
            vkDeviceWaitIdle(g_VkCtx.device);
            if (g_VkCtx.commandPool != VK_NULL_HANDLE) vkDestroyCommandPool(g_VkCtx.device, g_VkCtx.commandPool, nullptr);
            vkDestroyDevice(g_VkCtx.device, nullptr);
        }
        if (g_VkCtx.instance != VK_NULL_HANDLE) vkDestroyInstance(g_VkCtx.instance, nullptr);
    }
}