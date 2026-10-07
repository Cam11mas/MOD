cmake_minimum_required(VERSION 3.20)
project(EducationVulkanMod LANGUAGES CXX)


set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)


if(NOT DEFINED ENV{VULKAN_SDK})
    message(FATAL_ERROR "VULKAN_SDK environment variable not set.")
endif()


include_directories(“$ENV{VULKAN_SDK}/Include” "{CMAKE_CURRENT_SOURCE_DIR}/include")
link_directories("$ENV{VULKAN_SDK}/Lib")


include(FetchContent)
FetchContent_Declare(
    minhook
    GIT_REPOSITORY https://github.com
    GIT_TAG        master
)
FetchContent_MakeAvailable(minhook)


add_library(${PROJECT_NAME} SHARED
    src/main.cpp
    src/hooks.cpp
    src/dx11_12_interop.cpp
    src/vulkan_core.cpp
)


target_link_libraries(${PROJECT_NAME} PRIVATE
    vulkan-1
    minhook
    d3d11
    d3d12
    dxgi
)


target_compile_definitions(${PROJECT_NAME} PRIVATE _UNICODE UNICODE WIN32_LEAN_AND_MEAN)