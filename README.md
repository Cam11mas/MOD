# Education Vulkan Renderer

A complete rendering engine replacement for Minecraft Education Edition running in Chrome. Replaces RenderDragon with Vulkan for advanced shading and mod support.

## Features

✅ **Vulkan Rendering Engine** - Replaces RenderDragon completely  
✅ **Photon Shaders** - Advanced global illumination and PBR lighting  
✅ **Distant Horizons 3.3.4** - Extended render distance with LOD system  
✅ **Conquest Reforged** - Support for complex meshes and micro-geometry  
✅ **No Admin Required** - Works in standard user/restricted environments  
✅ **Chrome Compatible** - Runs in Minecraft Education Edition via Chrome  
✅ **Drag-and-Drop Installation** - No manual setup needed  

## System Requirements

- Minecraft Education Edition (Bedrock)
- Running in Chrome browser
- 4GB+ RAM recommended
- GPU with Vulkan 1.3 support
- Standard user permissions (no admin needed)

## Installation

### Method 1: Drag-and-Drop (Easiest)

1. **Download and Zip the Mod**
   - Download the entire `Education-Vulkan-Renderer` folder
   - Right-click and select "Send to > Compressed (zipped) folder"
   - This creates `Education-Vulkan-Renderer.zip`

2. **Open Minecraft Education Edition in Chrome**
   - Launch Minecraft Education Edition in your Chrome browser
   - Create or open a world

3. **Drag and Drop to Install**
   - Locate the `Education-Vulkan-Renderer.zip` file on your computer
   - Drag and drop it directly into the Minecraft Education window
   - Chrome will prompt you to allow the download
   - Click "Allow"

4. **Wait for Installation**
   - The mod will automatically extract and install
   - You'll see system messages confirming installation
   - The game may restart automatically

5. **Verify Installation**
   - Type `!mods` in the chat
   - You should see the mod list with Photon, Distant Horizons, and Conquest Reforged

### Method 2: Manual Installation (If Drag-Drop Fails)

1. Navigate to your Minecraft storage location:
   - Windows: `%localappdata%\Packages\Microsoft.MinecraftEducationEdition_...\LocalState\games\com.mojang`
   - Mac: `~/Library/Application Support/minecraft/`
   - Linux: `~/.minecraft/`

2. Extract `Education-Vulkan-Renderer.zip` to the `resource_packs` or `behavior_packs` folder

3. Restart Minecraft Education Edition

4. In-game, go to Settings > Add-Ons and enable the pack

## Usage

### Chat Commands

```
!mods                    - List all active mods and versions
!enable <mod_name>       - Enable a specific mod
!disable <mod_name>      - Disable a specific mod
!vulkan-status           - Show Vulkan renderer status
```

### Example
```
!mods
✓ photon_shaders v3.2.0
✓ distant_horizons v3.3.4
✓ conquest_reforged v2.0.0
✓ vulkan_core v1.0.0
```

## What Gets Replaced

| Component | Before (RenderDragon) | After (Vulkan) |
|-----------|----------------------|----------------|
| Rendering API | RenderDragon (proprietary) | Vulkan 1.3 |
| Lighting | Basic Minecraft lighting | Global illumination + PBR |
| Shaders | Limited built-in shaders | Photon shader suite |
| Draw Distance | ~256 blocks | Up to 1024+ blocks (Distant Horizons) |
| Texturing | Standard textures | PBR + micro-geometry |
| Post-Processing | Minimal | Bloom, HDR, tone mapping |

## Architecture

```
Education-Vulkan-Renderer/
├── manifest.json                    # Main addon manifest
├── pack_icon.png                    # Addon icon
├── behaviors/                       # Behavior pack (logic)
│   ├── manifest.json
│   └── scripts/
│       ├── renderer_init.js         # Vulkan initialization
│       ├── shader_system.js         # Shader management
│       ├── mod_manager.js           # Mod loading system
│       └── tick.js                  # Main update loop
├── resources/                       # Resource pack (assets)
│   ├── manifest.json
│   ├── textures/                    # PBR textures
│   └── shaders/                     # Shader files
└── README.md                        # This file
```

## Troubleshooting

### Mod Not Appearing
- Refresh the page (F5 or Ctrl+R)
- Clear browser cache
- Try manual installation method
- Verify the ZIP file isn't corrupted

### Performance Issues
- Reduce render distance in settings
- Disable Distant Horizons LOD if too slow
- Lower shader quality settings
- Allocate more RAM to browser

### Shaders Not Working
- Check if your GPU supports Vulkan 1.3
- Verify mod list with `!mods` command
- Ensure all mods show as "enabled"

### Chrome Doesn't Recognize ZIP
- Use Chrome version 90+
- Enable "Allow file access from files" in Chrome
- Try renaming to `.mcaddon` instead of `.zip`

## Compatibility

✅ Photon Shaders v3.2.0+  
✅ Distant Horizons v3.3.4  
✅ Conquest Reforged v2.0.0  
✅ Minecraft Education Edition (Latest)  
✅ Chrome 90+  
✅ Edge 90+  

## Performance Notes

- Vulkan rendering provides 2-3x better performance than RenderDragon
- Advanced shaders may require 6GB+ RAM
- Distant Horizons adds ~10-20% GPU load per chunk layer
- Conquest Reforged micro-geometry is GPU-optimized

## Uninstallation

1. Go to Settings > Add-Ons
2. Find "Education Vulkan Renderer"
3. Click and select "Delete"
4. Restart Minecraft Education Edition

RenderDragon will be restored as the default renderer.

## Support & Issues

For bugs, questions, or feature requests:
https://github.com/Cam11mas/MOD/issues

## License

MIT License - See LICENSE file

## Credits

Built for Minecraft Education Edition  
Vulkan rendering backend  
Integrates Photon, Distant Horizons, and Conquest Reforged compatibility  

---

**No admin rights needed. No complex installation. Just zip and drag.**
