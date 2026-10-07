#include "hooks.h"
#include "dx11_12_interop.h"
#include "vulkan_core.h"
#include <MinHook.h>
#include <d3d11.h>


typedef HRESULT(WINAPI* PresentType)(IDXGISwapChain* pSwapChain, UINT SyncInterval, UINT Flags);
PresentType OriginalPresent = nullptr;


HRESULT WINAPI HookedPresent(IDXGISwapChain* pSwapChain, UINT SyncInterval, UINT Flags) {
    if (!g_UseCustomVulkanRenderer) {
        return OriginalPresent(pSwapChain, SyncInterval, Flags);
    }


    if (DXInterop::InitializeFromSwapChain(pSwapChain)) {
        DXInterop::ProcessFrame();
    }


    return OriginalPresent(pSwapChain, SyncInterval, Flags);
}


namespace Hooks {
    bool Initialize() {
        if (MH_Initialize() != MH_OK) return false;


        HWND hWnd = GetDesktopWindow();
        IDXGISwapChain* pSwapChain = nullptr;
        ID3D11Device* pDevice = nullptr;
        ID3D11DeviceContext* pContext = nullptr;


        D3D_FEATURE_LEVEL featureLevels[] = { D3D_FEATURE_LEVEL_11_0 };
        DXGI_SWAP_CHAIN_DESC desc{};
        desc.BufferCount = 1;
        desc.BufferDesc.Width = 100;
        desc.BufferDesc.Height = 100;
        desc.BufferDesc.Format = DXGI_FORMAT_R8G8B8A8_UNORM;
        desc.BufferUsage = DXGI_USAGE_RENDER_TARGET_OUTPUT;
        desc.OutputWindow = hWnd;
        desc.SampleDesc.Count = 1;
        desc.Windowed = TRUE;


        if (FAILED(D3D11CreateDeviceAndSwapChain(nullptr, D3D_DRIVER_TYPE_NULL, nullptr, 0, featureLevels, 1, D3D11_SDK_VERSION, &desc, &pSwapChain, &pDevice, nullptr, &pContext))) {
            return false;
        }


        if (pSwapChain) {
            void** vmt = *(void***)pSwapChain;
            MH_CreateHook(vmt[8], &HookedPresent, reinterpret_cast<LPVOID*>(&OriginalPresent));
            MH_EnableHook(vmt[8]);


            pSwapChain->Release();
        }


        if (pContext) pContext->Release();
        if (pDevice) pDevice->Release();


        return true;
    }


    void Uninitialize() {
        MH_DisableHook(MH_ALL_HOOKS);
        MH_Uninitialize();
        DXInterop::Uninitialize();
        VulkanCore::Uninitialize();
    }
}