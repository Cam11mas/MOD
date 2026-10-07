# Photon Shaders UI Icons

## Icon Specifications

All icon textures should be created at **64x64 pixels** in PNG format.

### Icon List

#### Settings Icon (`ui_icon_settings.png`)
- **Color:** #00ffff (cyan)
- **Symbol:** Gear/cog shape
- **Size:** 64x64 px
- **Style:** Glowing outline with subtle inner glow

#### Presets Icon (`ui_icon_presets.png`)
- **Color:** #7a5cff (purple)
- **Symbol:** Spark/star burst
- **Size:** 64x64 px
- **Style:** Multi-pointed glow effect

#### Water Icon (`ui_icon_water.png`)
- **Color:** #00a8ff (light blue)
- **Symbol:** Wave pattern
- **Size:** 64x64 px
- **Style:** Flowing curves with droplet accents

#### Sky/Atmosphere Icon (`ui_icon_sky.png`)
- **Color:** #ffd166 (gold)
- **Symbol:** Sun or cloud shape
- **Size:** 64x64 px
- **Style:** Radiant glow with atmospheric haze

#### Close Icon (`ui_icon_close.png`)
- **Color:** #ff4d4d (red)
- **Symbol:** X shape
- **Size:** 64x64 px
- **Style:** Sharp, clear, high contrast

#### Back Icon (`ui_icon_back.png`)
- **Color:** #80ffcc (mint green)
- **Symbol:** Arrow pointing right (->)
- **Size:** 64x64 px
- **Style:** Clear directional indicator

### Design Guidelines

1. **Style Consistency:**
   - All icons use the same border width (2-3 px)
   - Consistent glow intensity across all icons
   - Centered composition with 8 px padding

2. **Color Scheme:**
   - Each icon has a unique primary color
   - Secondary highlight layer for depth
   - Optional alpha gradient for anti-aliasing

3. **Visual Treatment:**
   - Inner glowing effect (#ffffff at 30% opacity)
   - Outer glow layer (#ffffff at 10% opacity)
   - Slight blur/feather on edges (2-3 px)

4. **Background:**
   - Dark rounded square background (#101827, 12px corner radius)
   - Optional grid pattern at 20% opacity
   - Transparent areas should support overlay

5. **File Format:**
   - PNG with alpha channel (RGBA)
   - 64x64 pixels at 72 DPI
   - No interlacing
   - Optimize for minimal file size

## Creation Template

Suggested process:
1. Create 512x512 base layer with gradient background
2. Draw icon symbol at center
3. Add inner glow layer (white, 30% opacity, 3-4 px blur)
4. Add outer glow layer (white, 10% opacity, 6-8 px blur)
5. Add rounded square background beneath
6. Flatten and scale down to 64x64
7. Export as PNG with transparency

## Attribution

These icons are designed to match the Photon shader aesthetic and UI/UX guidelines for Minecraft Education Edition.
