# Texture Specifications for Photon Shaders UI

## Main Settings UI Background
**Filename:** `ui_settings_background_main.png`
**Resolution:** `512 x 512 pixels`
**Purpose:** Primary background for the main Photon settings menu
**Recommended Style:**
- Gradient from dark blue-black (#0a0e1a) at top-left to darker purple (#1a0a2e) at bottom-right
- Subtle diagonal grid pattern or circuit board aesthetic
- Transparency layer (alpha) for semi-transparent overlay effect
- Glow accents in corners with vibrant cyan (#00ffff) or gold (#FFD700)

**Suggested Design Elements:**
```
┌─────────────────────────────┐
│  Glow Accent (Cyan)         │
│  • • •  [Subtle Grid]  • • • │
│                              │
│    [MAIN SETTINGS MENU]      │
│                              │
│    Settings | Presets        │
│    Water    | Atmosphere     │
│    Disable                   │
│                              │
│  • • •  [Subtle Grid]  • • • │
│                 Glow Accent  │
└─────────────────────────────┘
```

## Settings Submenu Background
**Filename:** `ui_settings_background_submenu.png`
**Resolution:** `512 x 512 pixels`
**Purpose:** Background for individual settings submenus (Settings, Presets, Water, Atmosphere)
**Recommended Style:**
- Darker base color (#08050d) with more depth
- Vertical gradient from slightly lighter top to darker bottom
- Thin golden/cyan border lines (1-2 pixels) on left and right edges
- Subtle animated effect suggestion: horizontal scan-lines or flowing energy lines

**Suggested Design Elements:**
```
┌─────────────────────────────┐
│ ┃ [Settings Title]       [X] │
│ ┃                            │
│ ┃  Quality Level: [HIGH  ▼]  │
│ ┃  ✓ PBR Lighting           │
│ ┃  ✓ Global Illumination    │
│ ┃  ☐ Bloom                  │
│ ┃                            │
│ ┃  Shadow Distance: [===●] │
│ ┃                            │
│ ┃              [Apply] [→]   │
│ ┃                            │
└─────────────────────────────┘
  (Glowing left border in cyan)
```

## Preset Selection Background
**Filename:** `ui_presets_background.png`
**Resolution:** `512 x 512 pixels`
**Purpose:** Background for the Presets submenu
**Recommended Style:**
- Medium-dark base (#0f0c18)
- Radial gradient emanating from center in purple (#6a0572)
- 4 sections (one for each preset) with subtle dividers
- Each section can have a faint color tint matching its theme

**Suggested Design Elements:**
```
┌─────────────────────────────┐
│    [PHOTON PRESETS]         │
│                              │
│  ┌─────────┬─────────┐      │
│  │Competitive│ Balanced │      │
│  │  (Gray)  │ (Blue)   │      │
│  ├─────────┼─────────┤      │
│  │Cinematic │ Fantasy  │      │
│  │(Purple)  │(Magenta) │      │
│  └─────────┴─────────┘      │
│                              │
│              [Back →]        │
└─────────────────────────────┘
```

## Water Settings Background
**Filename:** `ui_water_background.png`
**Resolution:** `512 x 512 pixels`
**Purpose:** Background for Water rendering settings
**Recommended Style:**
- Base color: deep ocean blue (#001a33)
- Gradient: lighter cyan/blue at top, darker at bottom
- Animated water wave suggestion: subtle horizontal undulations or shimmer
- Top edge: light reflection effect (bright cyan line)

**Suggested Design Elements:**
```
┌─────────────────────────────┐
│ ═══ [WATER SYSTEM] ═══      │
│ ╔═════════════════════════╗  │
│ ║ Water Quality: [HIGH  ▼]║  │
│ ║ ✓ Wave Simulation       ║  │
│ ║ ✓ Caustics              ║  │
│ ║ ✓ Refraction            ║  │
│ ║ Wave Height: [═══●]     ║  │
│ ║ Caustic Intensity: [═●] ║  │
│ ╚═════════════════════════╝  │
│              [Back →]        │
└─────────────────────────────┘
```

## Atmosphere Settings Background
**Filename:** `ui_atmosphere_background.png`
**Resolution:** `512 x 512 pixels`
**Purpose:** Background for Atmosphere/Sky rendering settings
**Recommended Style:**
- Gradient from light sky blue (#87CEEB) at top to darker blue (#1e3a5f) at bottom
- Cloud-like soft overlays or star patterns
- Sun/moon glow effect in one corner
- Subtle aurora or northern lights suggestion

**Suggested Design Elements:**
```
┌─────────────────────────────┐
│         ✧ SKY & ATMOSPHERE ✧│
│  ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆     │
│ ✓ Sky Rendering             │
│ ✓ Fog Effects               │
│ ✓ Volumetric Lighting       │
│ ✓ Cloud Rendering           │
│ ✓ Rainbow Effects           │
│ ☐ Lightning Flashes         │
│                              │
│ Fog Density: [════●]        │
│ Sky Brightness: [════●]     │
│              [Back →]        │
└─────────────────────────────┘
```

## Button Icons and Accents
**Filename:** `ui_icon_settings.png` (and variants)
**Resolution:** `64 x 64 pixels` (per button icon)
**Purpose:** Button icons for main menu
**Icons needed:**
- `icon_settings.png` - Gear symbol (Settings button)
- `icon_presets.png` - Preset palette (Presets button)
- `icon_water.png` - Water droplet or waves (Water button)
- `icon_sky.png` - Sun/Sky (Atmosphere button)
- `icon_close.png` - X symbol (Close/Disable button)
- `icon_back.png` - Right arrow "→" (Back/Return button)

## Color Palette Reference
**For your texture creation:**
- **Primary Dark:** #0a0e1a (main background)
- **Secondary Dark:** #08050d (submenu background)
- **Primary Accent:** #00ffff (cyan, main UI glow)
- **Secondary Accent:** #FFD700 (gold, highlights)
- **Highlight Color:** #6a0572 (purple, effects)
- **Ocean Blue:** #001a33 (water theme)
- **Sky Blue:** #87CEEB (atmosphere theme)
- **Text Color:** #ffffff (white, primary text) / #a0a0a0 (gray, secondary text)

## Navigation Button Placement
**Close Button (X):**
- Position: Top-left corner
- Size: 48 x 48 pixels
- Color: Red accent (#ff4444) on hover
- Functionality: Closes current menu, returns to game

**Back Button (→):**
- Position: Bottom-right corner
- Size: 48 x 48 pixels  
- Color: Cyan accent (#00ffff) on hover
- Functionality: Returns to previous menu level

## Summary Table

| Texture Name | Size | Purpose | Theme Color |
|---|---|---|---|
| ui_settings_background_main.png | 512x512 | Main menu | Dark Blue/Purple |
| ui_settings_background_submenu.png | 512x512 | Submenus | Dark with Golden Border |
| ui_presets_background.png | 512x512 | Presets | Purple Radial |
| ui_water_background.png | 512x512 | Water Settings | Ocean Blue |
| ui_atmosphere_background.png | 512x512 | Atmosphere Settings | Sky Gradient |
| ui_icon_settings.png | 64x64 | Settings button | Cyan/Gold |
| ui_icon_presets.png | 64x64 | Presets button | Purple |
| ui_icon_water.png | 64x64 | Water button | Cyan Blue |
| ui_icon_sky.png | 64x64 | Atmosphere button | Sky Blue |
| ui_icon_close.png | 64x64 | Close button | Red |
| ui_icon_back.png | 64x64 | Back button | Cyan |

**All textures should be in PNG format with transparency support (RGBA)**
**Recommended file location in resource pack:**
```
resource_pack/
└── textures/
    └── ui/
        ├── backgrounds/
        │   ├── ui_settings_background_main.png
        │   ├── ui_settings_background_submenu.png
        │   ├── ui_presets_background.png
        │   ├── ui_water_background.png
        │   └── ui_atmosphere_background.png
        └── icons/
            ├── ui_icon_settings.png
            ├── ui_icon_presets.png
            ├── ui_icon_water.png
            ├── ui_icon_sky.png
            ├── ui_icon_close.png
            └── ui_icon_back.png
```
