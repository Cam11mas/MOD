#include "hooks.h"
#include <fstream>
#include <string>


bool g_UseCustomVulkanRenderer = true;


bool VerifyTargetProcess() {
    char buffer[MAX_PATH];
    GetModuleFileNameA(NULL, buffer, MAX_PATH);
    std::string path(buffer);
    return (path.find("Minecraft.Windows.exe") != std::string::npos || path.find("Minecraft.Education.exe") != std::string::npos);
}


void LoadConfiguration() {
    std::ifstream file("config.json");
    if (file.is_open()) {
        std::string line;
        while (std::getline(file, line)) {
            if (line.find("\"use_custom_vulkan\"") != std::string::npos) {
                if (line.find("false") != std::string::npos) {
                    g_UseCustomVulkanRenderer = false;
                } else {
                    g_UseCustomVulkanRenderer = true;
                }
            }
        }
    }
}


DWORD WINAPI DesktopModThread(LPVOID lpParam) {
    if (!VerifyTargetProcess()) {
        FreeLibraryAndExitThread((HMODULE)lpParam, 0);
        return 0;
    }


    LoadConfiguration();
    Hooks::Initialize();


    while (!(GetAsyncKeyState(VK_F8) & 0x8000)) {
        if (GetAsyncKeyState(VK_F9) & 0x1) {
            g_UseCustomVulkanRenderer = !g_UseCustomVulkanRenderer;
        }
        Sleep(100);
    }


    Hooks::Uninitialize();
    FreeLibraryAndExitThread((HMODULE)lpParam, 0);
    return 0;
}


BOOL APIENTRY DllMain(HMODULE hModule, DWORD ul_reason_for_call, LPVOID lpReserved) {
    if (ul_reason_for_call == DLL_PROCESS_ATTACH) {
        DisableThreadLibraryCalls(hModule);
        CreateThread(nullptr, 0, DesktopModThread, hModule, 0, nullptr);
    }
    return TRUE;
}