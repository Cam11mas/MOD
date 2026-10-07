# Photon Shaders for Minecraft Education Edition

## Overview

**Photon Shaders v1.2.0** brings professional-grade rendering to Minecraft Education Edition with:
- **Advanced PBR Rendering** - Physically-based materials with metallic and roughness control
- **Global Illumination** - Realistic indirect lighting and light bounce
- **Advanced Water System** - Waves, caustics, refraction, reflection, and foam
- **Subsurface Scattering** - Realistic light transmission through translucent materials
- **Parallax Mapping** - Depth-based surface detail enhancement
- **Bloom & HDR** - High dynamic range rendering with post-processing effects
- **Atmospheric Effects** - Sky rendering, fog, volumetric lighting, and clouds
- **Full Settings UI** - In-game menu system with presets and granular controls

## Installation

1. **Download the addon**
   - Download `photon_shaders_edu.zip`

2. **Drag-and-Drop into Minecraft Education Edition**
   - Open Minecraft Education Edition in Chrome
   - Create or open a world
   - Drag the `.zip` file into the game window
   - Click "Allow" when prompted

3. **Activate in Settings**
   - Go to Settings → Add-Ons
   - Enable "Photon Shaders EduEdition"
   - Restart the world

4. **Access the Settings Menu**
   - In-game, type `!photon` to open the main settings menu

## In-Game Commands

```
!photon          - Open main Photon settings menu
!photon status   - Display current Photon configuration
```

## Settings Menu Structure

### Main Menu
The main settings menu presents 5 primary options:

```
┌─────────────────────────────────────┐
│  PHOTON SHADERS v1.2.0              │
│  Status: ✓ Enabled                  │
├─────────────────────────────────────┤
│  [Settings ▼]  [Presets ▼]          │
│  [Water ▼]     [Atmosphere ▼]       │
│  [Disable ▼]                        │
└─────────────────────────────────────┘
```

**Navigation:**
- Close button (X): Top-left - closes menu
- Back button (→): Bottom-right - returns to previous menu

### Settings Submenu
Core rendering configuration:
- **Quality Level** - Low, Medium, High, Ultra
- **PBR Lighting** - Toggle physically-based rendering
- **Global Illumination** - Toggle indirect lighting
- **Ambient Occlusion** - Toggle AO darkening in crevices
- **Bloom Effect** - Toggle bloom on bright objects
- **Parallax Mapping** - Toggle depth-based surface detail
- **Subsurface Scattering** - Toggle translucent material lighting
- **Dynamic Lighting** - Toggle dynamic light sources
- **Shadow Distance** - Adjust shadow rendering distance (64-512 blocks)

### Presets Submenu
Quick-apply preset configurations:
- **Competitive** - Fast & clear, minimal quality loss, maximum performance
- **Balanced** - Best balance of quality and performance
- **Cinematic** - Maximum visual quality for screenshots and recording
- **Fantasy** - Artistic color palette with enhanced effects

### Water Submenu
Advanced water rendering settings:
- **Water Quality** - Low, Medium, High, Ultra
- **Wave Simulation** - Toggle realistic wave physics
- **Caustics** - Toggle underwater light patterns
- **Refraction** - Toggle light bending through water
- **Reflection** - Toggle water surface reflections
- **Foam Effects** - Toggle wave foam and spray
- **Underwater Caustics** - Toggle caustic patterns underwater
- **Wave Height** - Adjust wave amplitude (0.1-2.0)
- **Caustic Intensity** - Adjust caustic brightness (0.0-1.0)

### Atmosphere Submenu
Sky and atmospheric effects:
- **Sky Rendering** - Toggle sky rendering
- **Fog Effects** - Toggle fog rendering
- **Volumetric Lighting** - Toggle light rays through atmosphere
- **Cloud Rendering** - Toggle cloud rendering
- **Rainbow Effects** - Toggle rainbow rendering during rain
- **Lightning Flashes** - Toggle lightning illumination effects
- **Fog Density** - Adjust fog thickness (0.0-1.0)
- **Sky Brightness** - Adjust overall sky brightness (0.5-1.5)
- **Cloud Coverage** - Adjust cloud density (0.0-1.0)

## Shader Features

### Geometry Pass
- Normal mapping with parallax depth
- PBR material properties (metallic, roughness, AO)
- Tessellation for surface detail
- Double-sided materials for special effects

### Lighting Pass
- Global illumination with light bouncing
- Dynamic shadow mapping
- Per-pixel lighting calculations
- Ambient occlusion in contact areas
- Emissive material support

### Water System
- Real-time wave simulation (GPU-driven)
- Caustic animation and refraction
- Realistic water reflection and transparency
- Foam generation at wave peaks
- Under-water caustic projection

### Post-Processing
- Bloom effect for bright objects
- HDR tone mapping
- Color grading
- FXAA anti-aliasing
- Chromatic aberration (optional)

### Atmosphere
- Dynamic sky rendering
- Volumetric fog effects
- Atmosphere color grading
- Cloud layer rendering
- Rainbow rendering during rain
- Crepuscular rays (god rays)

## Material Profiles

### PBR Base Material
- Basecolor, normal, roughness, metallic, AO, emissive
- Customizable lighting response
- Subsurface scattering support
- Parallax mapping depth

### Water Material
- Wave simulation
- Caustics overlay
- Refraction and reflection
- Foam layer
- Underwater effects

### Glass Material
- Transmission (transparency)
- Refraction with IOR (Index of Refraction)
- Reflection
- Fresnel effects
- No depth writing for proper blending

## Preset Details

### Competitive Preset
```
Quality: Medium
PBR: Yes | GI: No | AO: No | Bloom: No | Parallax: No | SSS: No
Water: Medium | Shadows: 128 blocks
Best for: Gameplay, PvP, maximum FPS
Approximate Performance: High (60+ FPS on mid-range hardware)
```

### Balanced Preset
```
Quality: High
PBR: Yes | GI: Yes | AO: Yes | Bloom: Yes | Parallax: Yes | SSS: No
Water: High | Shadows: 256 blocks
Best for: General gameplay with good visuals
Approximate Performance: Medium (40-60 FPS on mid-range hardware)
```

### Cinematic Preset
```
Quality: Ultra
PBR: Yes | GI: Yes | AO: Yes | Bloom: Yes | Parallax: Yes | SSS: Yes
Water: Ultra | Shadows: 512 blocks
Best for: Screenshots, recording, maximum visual fidelity
Approximate Performance: Low (20-40 FPS, GPU-intensive)
```

### Fantasy Preset
```
Quality: High
PBR: Yes | GI: Yes | AO: Yes | Bloom: Yes | Parallax: Yes | SSS: Yes
Water: Ultra | Shadows: 256 blocks
Special: Enhanced colors, artistic grading
Best for: Creative mode, building, artistic shots
Approximate Performance: Medium-Low (30-50 FPS)
```

## Integration with Advanced Bedrock Framework

Photon Shaders integrates seamlessly with the Advanced Bedrock Visual Framework:
- Registers as a primary shader mod
- Exports 6 core shader modules (PBR, GI, Water, Parallax, SSS, Bloom)
- Provides modular texture pipeline
- Compatible with LOD rendering systems
- Supports multi-mod ecosystem

## Texture Directory Structure

```
photon_shaders_edu/
resource_pack/
├── textures/
│   ├── ui/
│   │   ├── backgrounds/
│   │   │   ├── ui_settings_background_main.png (512x512)
│   │   │   ├── ui_settings_background_submenu.png (512x512)
│   │   │   ├── ui_presets_background.png (512x512)
│   │   │   ├── ui_water_background.png (512x512)
│   │   │   └── ui_atmosphere_background.png (512x512)
│   │   └── icons/
│   │       ├── ui_icon_settings.png (64x64)
│   │       ├── ui_icon_presets.png (64x64)
│   │       ├── ui_icon_water.png (64x64)
│   │       ├── ui_icon_sky.png (64x64)
│   │       ├── ui_icon_close.png (64x64)
│   │       └── ui_icon_back.png (64x64)
│   ├── pbr/
│   │   ├── basecolor/
│   │   ├── normal/
│   │   ├── roughness/
│   │   ├── metallic/
│   │   ├── emissive/
│   │   └── ao/
│   ├── water/
│   │   ├── base.png
│   │   ├── normal.png
│   │   ├── flow.png
│   │   └── caustics.png
│   └── glass/
│       ├── base.png
│       ├── normal.png
│       └── roughness.png
```

**See `TEXTURE_SPECIFICATIONS.md` for detailed texture specifications and creation guidelines.**

## Performance Optimization

- **Low Quality**: Disables advanced effects, minimal GPU load
- **Medium Quality**: Balance mode with most features
- **High Quality**: Full feature set with some optimization
- **Ultra Quality**: All features enabled, no optimization

**Recommended Settings by Hardware:**

| Hardware | Quality | Expected FPS |
|----------|---------|---------------|
| Mobile/Low-End | Low | 60+ |
| Mid-Range | Medium | 40-60 |
| High-End | High | 30-50 |
| Very High-End | Ultra | 20-40 |

## Troubleshooting

### Menu not appearing
- Verify addon is enabled in Settings → Add-Ons
- Try typing `!photon` again
- Restart the world

### Performance drops
- Lower the Quality Level preset
- Disable subsurface scattering
- Reduce shadow distance
- Disable bloom effect

### Visual artifacts
- Ensure GPU supports Bedrock native features
- Try different quality presets
- Restart Minecraft

### Settings not saving
- Settings are applied per-session
- Create a new shortcut or bookmark to quickly access settings

## Future Updates

Planned features for upcoming versions:
- Custom preset saving/loading
- Per-biome shader variations
- Advanced debugging overlay
- Performance profiler
- Community preset sharing

## Support & Contributing

For bugs, questions, or contributions:
https://github.com/Cam11mas/MOD/issues

## Credits

**Photon Shaders** - Based on the Java shader pack by sixthsurge  
**Minecraft Education Edition** - Microsoft Corporation  
**Advanced Bedrock Framework** - Education Mod Community  

## License

MIT License - See LICENSE file

---

**Enjoy stunning visuals in Minecraft Education Edition!**

**Type `!photon` to get started.**
