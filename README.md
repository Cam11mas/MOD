# Minecraft Education Mod

A Fabric-based Minecraft mod suite designed to run in restricted environments without requiring Vulkan SDK, developer mode, or administrator privileges.

## Overview

This mod provides:
- **Custom Rendering**: Educational shader effects and visual enhancements
- **Interactive Blocks**: Data visualization and interactive educational content
- **Science Tools**: Educational items and mechanics for learning concepts
- **Standard User Installation**: Drop-and-play installation with no system configuration

## System Requirements

- **Minecraft Java Edition 1.20.4+**
- **Fabric Loader** (download from https://fabricmc.net/)
- **Fabric API mod**
- **4GB+ RAM** allocated to Minecraft
- **Standard user permissions** (no admin required)

## Installation (No Admin/SDK Required)

### 1. Install Fabric Loader
- Download Fabric Installer for Minecraft 1.20.4 from https://fabricmc.net/
- Run the installer (no admin privileges needed)
- Select "Install client"
- Ensure Minecraft is not running
- Click "Install"

### 2. Install Fabric API
- Download Fabric API JAR for 1.20.4 from https://modrinth.com/mod/fabric-api
- Navigate to `.minecraft/mods/` folder (create if missing)
- Paste the Fabric API JAR

### 3. Install Education Mod
- Download `MinecraftEdu-Mod-1.0.0.jar` from the releases page
- Navigate to `.minecraft/mods/` folder
- Paste the Education Mod JAR
- Launch Minecraft from the Fabric profile

### Standard User Path (No Command Line)
1. Download Fabric Installer GUI
2. Follow on-screen instructions
3. Use Windows/Mac file explorer to place mods in `.minecraft/mods/`
4. Run Minecraft

## File Structure

```
MOD/
├── index.html                          # Web installer/info page
├── app.js                             # Interactive preview script
├── styles.css                         # Installer UI styling
├── fabric.mod.json                    # Fabric mod metadata
├── README.md                          # This file
├── src/main/java/
│   └── com/cam11mas/minecraftedu/
│       ├── MinecraftEduMod.java       # Main mod class
│       └── client/
│           └── MinecraftEduClient.java # Client-side features
└── src/main/resources/
    └── minecraftedu.mixins.json       # Mixin configuration
```

## Features

### 🎨 Custom Shaders
- Water reflections and refraction
- Atmospheric lighting effects
- Custom particle systems
- No Vulkan SDK or external GPU API required

### 📊 Interactive Blocks
- Real-time data visualization
- Educational chart and graph blocks
- Interactive information displays
- Custom textures and rendering

### 🔬 Science Tools
- Particle emitter item
- Spectrum analyzer
- Educational NPCs
- Learning-focused mechanics

## Usage

### Key Bindings (Default)
- **F9**: Toggle custom renderer on/off
- **F8**: Open settings menu

### Configuration
Create `.minecraft/config/minecraftedu.json` to customize:

```json
{
  "rendererEnabled": true,
  "effectsQuality": "high",
  "particlesEnabled": true
}
```

## Troubleshooting

### Mod not loading?
1. Verify Fabric Loader is installed correctly
2. Check Fabric API is in mods folder
3. Check game console for error messages

### Performance issues?
1. Increase RAM allocated to Minecraft (Settings > Set Installation > Minecraft Launcher > Edit > JVM Arguments)
2. Disable visual effects in mod settings
3. Reduce render distance

### Mods folder missing?
1. Launch Minecraft with Fabric profile once
2. Close Minecraft
3. Mods folder will now exist at `.minecraft/mods/`

## Building from Source

No build tools required for end users. The mod is distributed as pre-compiled JAR.

For developers:
```bash
# Requires Gradle and JDK 17+
./gradlew build
```

## Version History

- **1.0.0** - Initial release
  - Custom rendering system
  - Interactive blocks framework
  - Science tools foundation
  - Fabric 1.20.4 support

## License

MIT License - See LICENSE file

## Support

For issues and feature requests, visit: https://github.com/Cam11mas/MOD/issues

## Why Not Vulkan/DLL Injection?

The original architecture required:
- Vulkan SDK installation
- CMake build system
- MinHook DLL injection
- Administrator privileges
- Developer mode enabled

**This version uses Fabric because:**
- ✅ Works with standard user permissions
- ✅ No SDK or build tools required
- ✅ No administrator privileges needed
- ✅ Cross-platform (Windows, Mac, Linux)
- ✅ Minecraft's official modding framework
- ✅ Pre-compiled, ready to install
- ✅ Safe and secure by default
