# Photon Shaders UI Backgrounds

## Texture Specifications

All background textures should be created at **512x512 pixels** in PNG format.

### Main Background (`ui_settings_background_main.png`)
- **Size:** 512x512 px
- **Style:** Dark gradient from #0a0e1a (top-left) to #1d113a (bottom-right)
- **Features:**
  - Subtle diagonal grid pattern (2-3 px spacing, 10% opacity)
  - Glowing cyan (#00ffff) corner accents
  - Thin cyan border frame (2 px, 80% opacity)
  - Circuit board aesthetic (optional)
  - Alpha transparency layer for overlay effect

### Submenu Background (`ui_settings_background_submenu.png`)
- **Size:** 512x512 px
- **Style:** Darker base #0d0b16 with vertical gradient to #1f1633
- **Features:**
  - Flowing energy lines (vertical, 1-2 px, cyan tint)
  - Left/right border glows (golden/cyan, 1-2 px)
  - Subtle scan-line effect (horizontal, 2 px spacing, 5% opacity)
  - Center content panel definition

### Preset Background (`ui_presets_background.png`)
- **Size:** 512x512 px
- **Style:** Gradient #111525 to #311b52
- **Features:**
  - Radial highlight in center
  - Soft glow around edges
  - Color accent zones (4 corners for preset types)

### Water Background (`ui_water_background.png`)
- **Size:** 512x512 px
- **Style:** Blue gradient #001a33 to #1c4f72
- **Features:**
  - Wave pattern overlay (subtle)
  - Water caustic texture effect
  - Reflection hints at bottom
  - Transparency gradient

### Atmosphere Background (`ui_atmosphere_background.png`)
- **Size:** 512x512 px
- **Style:** Sky gradient #87ceeb to #1e3a5f
- **Features:**
  - Cloud layer silhouettes
  - Volumetric light ray suggestions
  - Horizon line definition
  - Sun/sky glow accents

## Design Guidelines

1. **Color Palette:**
   - Primary: #00ffff (cyan)
   - Secondary: #7a5cff (purple)
   - Accent: #FFD700 (gold)
   - Dark base: #0a0e1a

2. **Border & Framing:**
   - Use thin glowing borders (1-2 px)
   - Leave padding for text content (20-30 px margins)
   - Ensure readability with sufficient contrast

3. **Visual Effects:**
   - Keep opacity layers to create depth
   - Use subtle patterns to guide the eye
   - Avoid solid colors—use gradients for dimension

4. **File Format:**
   - PNG format with alpha channel (RGBA)
   - Optimize for file size without quality loss
   - Ensure no interlacing for immediate render

## Creation Tools

Recommended tools for creating these textures:
- Photoshop / GIMP (raster graphics)
- Aseprite (pixel art & animation)
- Krita (open-source digital painting)
- Blender (procedural generation)

## Attribution

These designs are inspired by the Photon shader pack by sixthsurge and adapted for Minecraft Education Edition.
