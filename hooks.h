#pragma once
#include <windows.h>
#include <dxgi.h>


extern bool g_UseCustomVulkanRenderer;


namespace Hooks {
    bool Initialize();
    void Uninitialize();
}