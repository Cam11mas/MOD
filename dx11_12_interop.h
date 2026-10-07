#pragma once
#include <dxgi.h>
#include <vulkan/vulkan.h>


namespace DXInterop {
    bool InitializeFromSwapChain(IDXGISwapChain* pSwapChain);
    void ProcessFrame();
    void Uninitialize();
}