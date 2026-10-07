# Photon Shaders Education Edition - Installation Guide

## Quick Start

### Method 1: Drag & Drop (Easiest)

1. **Download the addon package**
   - Obtain the `photon_shaders_edu.zip` file

2. **Open Minecraft Education Edition**
   - Launch Minecraft Education Edition in your browser
   - Create or open an existing world

3. **Drag & Drop the ZIP**
   - Drag the `photon_shaders_edu.zip` file into the Minecraft game window
   - Click "Allow" when prompted
   - Wait for import to complete

4. **Activate in Settings**
   - Go to Settings → Add-Ons
   - Under "Installed Packs," find "Photon Shaders Education Edition"
   - Toggle to enable both the Behavior Pack and Resource Pack
   - Restart the world

5. **Access the Menu**
   - In-game, type the following command:
     ```
     !photon
     ```
   - The Photon Shaders main menu will appear

### Method 2: Manual File Installation

1. **Extract the ZIP**
   - Extract `photon_shaders_edu.zip` to a known location

2. **Locate Minecraft Add-On Folder**
   - Windows: `%APPDATA%\Minecraft\development_behavior_packs` and `development_resource_packs`
   - macOS: `~/Library/Application Support/minecraft/development_behavior_packs`
   - Linux: `~/.minecraft/development_behavior_packs`

3. **Copy Folders**
   - Copy the extracted `photon_shaders_edu/behavior_pack` to `development_behavior_packs`
   - Copy the extracted `photon_shaders_edu/resource_pack` to `development_resource_packs`

4. **Activate in Game**
   - Open Minecraft Education Edition
   - Go to Settings → Add-Ons
   - Enable "Photon Shaders - Behavior Pack" and "Photon Shaders - Resource Pack"
   - Restart the world

5. **Use the Menu**
   ```
   !photon
   ```

## In-Game Commands

### Main Menu
```
!photon
```
Opens the Photon Shaders main menu with options for all installed mods.

### Status Check
```
!photon status
```
Displays the current Photon configuration and active mods.

## Menu Navigation

### Main Menu Structure
```
┌─────────────────────────────────────┐
│   PHOTON SHADERS v1.2.0             │
│   Status: ✓ Enabled                 │
├─────────────────────────────────────┤
│  ⚙️  Photon Shaders                  │
│      Advanced PBR rendering & ...   │
│                                     │
│  🌍 Distant Horizons                 │
│      LOD terrain rendering system   │
│                                     │
│  🎨 Conquest Reforged                │
│      Advanced material & texture    │
│                                     │
│  💧 Advanced Water                   │
│      Enhanced water rendering ...   │
│                                     │
│  ☁️  Atmospheric FX                   │
│      Sky, fog, and lighting ...     │
│                                     │
│  ⚡ Performance Tuner                 │
│      Optimization & quality ...     │
│                                     │
│     [← Back]              [Close]   │
└─────────────────────────────────────┘
```

### Navigation Controls
- **Left Side (Close Button):** Closes the menu and returns to gameplay
- **Right Side (Back Button):** Returns to the previous menu level
- **Button Selection:** Opens submenu for that mod/setting

## Mod Descriptions

### Photon Shaders (⚙️)
**Advanced PBR rendering & effects**
- Settings: Quality, PBR Lighting, Global Illumination, Ambient Occlusion, Bloom, Parallax, Subsurface Scattering
- Presets: Competitive, Balanced, Cinematic, Fantasy

### Distant Horizons (🌍)
**LOD terrain rendering system**
- Settings: LOD Distance, Terrain Simplification, Detail Levels
- Improves performance on far-distance terrain rendering

### Conquest Reforged (🎨)
**Advanced material & texture pack**
- Settings: Material Pack, Geometry Detail, Custom Palettes
- High-quality texture and material overhauls

### Advanced Water (💧)
**Enhanced water rendering system**
- Settings: Water Quality, Waves, Caustics, Refraction, Reflection, Foam
- Realistic water physics and visual effects

### Atmospheric FX (☁️)
**Sky, fog, and lighting effects**
- Settings: Sky Rendering, Fog, Volumetric Lighting, Clouds, Rainbows, Lightning
- Atmospheric and environmental enhancements

### Performance Tuner (⚡)
**Optimization & quality presets**
- Presets: Competitive (60+ FPS), Balanced (40-60 FPS), Cinematic (20-40 FPS), Fantasy (30-50 FPS)
- Quick quality/performance profile switching

## Troubleshooting

### Menu doesn't appear
- Verify that both Behavior Pack and Resource Pack are enabled in Settings → Add-Ons
- Try typing `!photon` again
- Restart the world or reload Minecraft Education Edition
- Check that the pack was imported correctly

### Settings not saving
- Settings are applied per-game session
- Re-enter the menu to verify changes are applied
- Restart the world to reset to default settings

### Performance issues
- Use the Performance Tuner to switch to a lower-end preset
- Disable visual effects individually in mod settings
- Reduce shadow distance and LOD draw distance
- Close other applications to free up system resources

### Visual artifacts or glitches
- Try updating Minecraft Education Edition to the latest version
- Test with default settings (use Reset buttons in submenus)
- Try a different quality preset
- Clear Minecraft cache and reload

## Features by Preset

### Competitive
```
FPS Target: 60+
Quality: Medium
PBR: Yes | GI: No | AO: No | Bloom: No | Parallax: No | SSS: No
Water: Medium | Shadows: 128 blocks
Best for: Gameplay, PvP, maximum FPS
```

### Balanced
```
FPS Target: 40-60
Quality: High
PBR: Yes | GI: Yes | AO: Yes | Bloom: Yes | Parallax: Yes | SSS: No
Water: High | Shadows: 256 blocks
Best for: General gameplay with good visuals
```

### Cinematic
```
FPS Target: 20-40
Quality: Ultra
PBR: Yes | GI: Yes | AO: Yes | Bloom: Yes | Parallax: Yes | SSS: Yes
Water: Ultra | Shadows: 512 blocks
Best for: Screenshots, recording, maximum visual fidelity
```

### Fantasy
```
FPS Target: 30-50
Quality: High
PBR: Yes | GI: Yes | AO: Yes | Bloom: Yes | Parallax: Yes | SSS: Yes
Water: Ultra | Shadows: 256 blocks
Special: Enhanced colors, artistic grading
Best for: Creative mode, building, artistic shots
```

## System Requirements

- **Minecraft Education Edition** (Latest version recommended)
- **Browser:** Chrome, Edge, or compatible WebGL 2.0 browser
- **RAM:** 4GB minimum, 8GB recommended
- **GPU:** Dedicated graphics card recommended
- **Storage:** 500MB free space for addon files

## Performance Tips

1. **For Best Visuals:**
   - Use Cinematic preset
   - Enable all effects
   - Set shadow distance to maximum (512 blocks)
   - Use Ultra quality for water and atmosphere

2. **For Best Performance:**
   - Use Competitive preset
   - Close other applications
   - Reduce render distance
   - Disable unnecessary visual effects
   - Use Low or Medium quality settings

3. **Balanced Approach:**
   - Use Balanced preset (recommended for most users)
   - Adjust individual settings as needed
   - Monitor FPS and adjust quality up or down

## Support & Feedback

For issues, suggestions, or contributions:
- Visit: https://github.com/Cam11mas/MOD/issues
- Report bugs with specific details (quality preset, affected mod, steps to reproduce)
- Include system information (OS, GPU, browser version)

## License

Photon Shaders Education Edition is released under the **MIT License**.
See the LICENSE file in the addon folder for details.

---

**Enjoy stunning visuals in Minecraft Education Edition!**

**Type `!photon` to get started.**
