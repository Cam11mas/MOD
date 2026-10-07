# Photon Shaders for Minecraft Education Edition

## Overview

**Photon Shaders v1.2.0** brings professional-grade rendering to Minecraft Education Edition with a modular, extensible framework:

- **Advanced PBR Rendering** - Physically-based materials
- **Global Illumination** - Realistic indirect lighting
- **Advanced Water System** - Waves, caustics, refraction
- **Subsurface Scattering** - Translucent material lighting
- **Parallax Mapping** - Depth-based surface detail
- **Bloom & HDR** - Post-processing effects
- **Atmospheric Effects** - Sky, fog, volumetric lighting
- **Modular Mod System** - Extensible framework for custom mods
- **Full Settings UI** - In-game menu with presets and granular controls

## Quick Start

### Installation

1. Download `photon_shaders_edu.zip`
2. Drag into Minecraft Education Edition window
3. Enable in Settings → Add-Ons
4. In-game, type: `!photon`

### Commands

```
!photon          - Open main settings menu
!photon status   - Display current configuration
```

## Built-In Mods

The framework includes six built-in mod modules:

### 1. Photon Shaders (⚙️)
**Advanced PBR rendering & effects**
- Quality levels: Low, Medium, High, Ultra
- PBR Lighting, Global Illumination, Ambient Occlusion
- Bloom, Parallax Mapping, Subsurface Scattering
- Dynamic Lighting, Adjustable shadow distance

### 2. Distant Horizons (🌍)
**LOD terrain rendering system**
- Adjustable LOD draw distance
- Terrain simplification at distance
- Multiple detail levels
- Performance optimization for far-view rendering

### 3. Conquest Reforged (🎨)
**Advanced material & texture pack**
- Material pack selection
- Geometry detail levels
- Custom palette customization
- High-quality block and item textures

### 4. Advanced Water (💧)
**Enhanced water rendering system**
- Water quality levels (Low to Ultra)
- Wave simulation physics
- Caustic patterns and animation
- Refraction and reflection effects
- Foam generation and effects

### 5. Atmospheric FX (☁️)
**Sky, fog, and lighting effects**
- Sky rendering control
- Fog effects and density adjustment
- Volumetric lighting (god rays)
- Cloud rendering and coverage
- Rainbow and lightning effects

### 6. Performance Tuner (⚡)
**Optimization & quality presets**
- **Competitive:** Maximum FPS (60+)
- **Balanced:** Quality/Performance (40-60 FPS)
- **Cinematic:** Maximum quality (20-40 FPS)
- **Fantasy:** Artistic colors (30-50 FPS)

## Menu System

### Navigation Structure

```
Main Menu
├── Photon Shaders
│   ├── Quality Level
│   ├── PBR Lighting
│   ├── Global Illumination
│   ├── Ambient Occlusion
│   ├── Bloom Effect
│   ├── Parallax Mapping
│   └── Subsurface Scattering
├── Distant Horizons
│   ├── LOD Distance
│   ├── Terrain Simplification
│   └── Detail Levels
├── Conquest Reforged
│   ├── Material Pack
│   ├── Geometry Detail
│   └── Custom Palettes
├── Advanced Water
│   ├── Water Quality
│   ├── Wave Simulation
│   ├── Caustics
│   ├── Refraction
│   └── Reflection
├── Atmospheric FX
│   ├── Sky Rendering
│   ├── Fog Effects
│   ├── Volumetric Lighting
│   └── Cloud Rendering
└── Performance Tuner
    ├── Competitive Preset
    ├── Balanced Preset
    ├── Cinematic Preset
    └── Fantasy Preset
```

### Button Placement

- **Left Side:** Close button (X) - closes menu immediately
- **Right Side:** Back button (→) - returns to previous menu level
- **Bottom:** "Back to Main Menu" button on all submenus

## File Structure

```
photon_shaders_edu/
├── manifest.json                          # Main addon manifest
├── README.md                              # This file
├── INSTALLATION.md                        # Installation guide
├── TEXTURE_SPECIFICATIONS.md              # Texture creation guidelines
├── behavior_pack/
│   ├── manifest.json                      # Behavior pack manifest
│   └── scripts/
│       ├── index.js                       # Entry point
│       ├── mod_registry.js                # Mod registration system
│       ├── photon_menu_ui.js              # Main menu UI class
│       ├── ui_settings_loader.js          # Settings loader
│       └── ui_schema.json                 # UI schema definition
├── resource_pack/
│   ├── manifest.json                      # Resource pack manifest
│   ├── materials/
│   │   └── photon_ui_materials.material.json
│   ├── textures/
│   │   └── ui/
│   │       ├── backgrounds/               # Menu backgrounds (512x512)
│   │       │   ├── ui_main_background.png
│   │       │   ├── ui_submenu_background.png
│   │       │   ├── ui_presets_background.png
│   │       │   ├── ui_water_background.png
│   │       │   └── ui_atmosphere_background.png
│   │       └── icons/                     # UI icons (64x64)
│   │           ├── ui_icon_settings.png
│   │           ├── ui_icon_presets.png
│   │           ├── ui_icon_water.png
│   │           ├── ui_icon_sky.png
│   │           ├── ui_icon_close.png
│   │           └── ui_icon_back.png
│   └── ui/
│       └── photon_ui_styles.json          # UI style definitions
└── docs/                                  # Documentation
    ├── INSTALLATION.md
    ├── API.md
    └── CUSTOMIZATION.md
```

## Texture Specifications

### Background Textures
- **Format:** PNG (RGBA)
- **Resolution:** 512 × 512 pixels
- **Colors:** Dark gradients with cyan (#00ffff) accents
- **Style:** Subtle grid pattern, glowing borders, circuit board aesthetic

### Icon Textures
- **Format:** PNG (RGBA)
- **Resolution:** 64 × 64 pixels
- **Colors:** Color-coded by function (cyan for settings, purple for presets, etc.)
- **Style:** Glowing effects, rounded backgrounds, centered symbols

**See TEXTURE_SPECIFICATIONS.md for detailed creation guidelines.**

## Extensibility

### Adding Custom Mods

To add a new mod to the framework:

1. **Register in `mod_registry.js`:**
   ```javascript
   this.mods.set('custom_mod', {
     id: 'custom_mod',
     label: 'Custom Mod Name',
     description: 'Brief description',
     icon: '🎯',
     color: '§c',
     enabled: true,
     submenu: 'custom_settings'
   });
   ```

2. **Add submenu handler in `photon_menu_ui.js`:**
   ```javascript
   else if (mod.submenu === 'custom_settings') {
     form.button('§cCustom Setting\n§8Description');
   }
   ```

3. **Create textures** for your mod's icon and settings background

4. **Package and distribute** as an enhanced addon

## Performance Guidelines

| Hardware | Recommended Preset | Expected FPS |
|----------|-------------------|---------------|
| Mobile/Low-End | Low/Competitive | 60+ |
| Mid-Range | Medium/Balanced | 40-60 |
| High-End | High | 30-50 |
| Very High-End | Ultra/Cinematic | 20-40 |

## Troubleshooting

### Menu not appearing
- Verify both packs are enabled in Settings → Add-Ons
- Try typing `!photon` again
- Restart the world

### Performance drops
- Lower the Quality Level preset
- Disable individual effects
- Reduce shadow distance

### Visual artifacts
- Try different quality presets
- Restart Minecraft Education Edition
- Check for pack conflicts

## System Requirements

- **Minecraft Education Edition** (latest version)
- **Browser:** Chrome, Edge (WebGL 2.0 compatible)
- **RAM:** 4GB minimum, 8GB recommended
- **GPU:** Dedicated graphics card recommended
- **Storage:** 500MB free space

## Credits

- **Photon Shaders** - Based on the Java shader pack by sixthsurge
- **Minecraft Education Edition** - Microsoft Corporation
- **Advanced Bedrock Framework** - Education Mod Community

## License

MIT License - See LICENSE file

---

**Enjoy stunning visuals in Minecraft Education Edition!**

**Type `!photon` to get started.**
