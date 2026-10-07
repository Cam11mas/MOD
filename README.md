# Advanced Bedrock Visual Framework

This repository is organized as a hybrid Bedrock development framework for Minecraft Education Edition. It is designed to maximize visual fidelity within supported native Bedrock capabilities while keeping a clear separation between:
- the actual Bedrock add-on structure
- advanced PBR / LOD / material design templates
- desktop-native research and hook concepts

## Purpose

The project aims to create a foundation for high-impact visual modules inspired by effects and workflows associated with:
- Photon shader-style lighting and post-processing
- Distant Horizons-style LOD / terrain simplification
- Conquest Reforged-style material and geometry workflows

The project is intentionally divided so that the Bedrock package remains realistic and standards-based, while the native desktop hook research remains isolated in a non-production area.

## Repository Layout

```
MOD/
├── manifest.json
├── README.md
├── photon_shaders_edu/
│   ├── manifest.json
│   ├── README.md
│   ├── TEXTURE_SPECIFICATIONS.md
│   ├── behavior_pack/
│   │   ├── manifest.json
│   │   └── scripts/
│   │       ├── photon_core.js
│   │       ├── photon_framework_bridge.js
│   │       └── ui_settings.js
│   ├── resource_pack/
│   │   ├── manifest.json
│   │   ├── materials/
│   │   │   └── photon_materials.material.json
│   │   └── textures/
│   │       └── ui/
│   │           ├── backgrounds/
│   │           └── icons/
│   └── example_mods/
│       ├── photon_shader_mod.js
│       ├── distant_horizons_mod.js
│       ├── conquest_reforged_mod.js
│       └── index.js
├── docs/
│   ├── renderdragon_pbr_templates.md
│   ├── lod_structure_design.md
│   ├── java_to_bedrock_asset_pipeline.md
│   ├── bedrock_visual_limits.md
│   └── desktop_native_hooks.md
├── tools/
│   └── java_to_bedrock/
│       ├── README.md
│       ├── convert_assets.py
│       ├── atlas_builder.py
│       └── block_geometry_optimizer.py
├── hooking/
│   ├── README.md
│   └── cxx/
│       ├── render_api_bridge.h
│       ├── render_api_bridge.cpp
│       ├── vulkan_capability_probe.cpp
│       └── notes.md
└── resource_pack/
    └── ...
```

## Core Capabilities

### 1. Advanced RenderDragon PBR Templates
The repo includes advanced material definitions to simulate techniques such as:
- physically based rendering (PBR)
- normal mapping
- roughness and metallic control
- emissive textures
- subsurface-light approximations
- deferred-lighting-inspired lighting profiles

These are documented in the `resource_pack/materials` and the design notes under `docs/`.

### 2. Data-Driven LOD Structures
The framework includes an LOD strategy for far-distance simplification using:
- tiered detail levels
- distance-based material changes
- simplified terrain masks
- fog/occlusion approach for distant area reduction

This is documented in `docs/lod_structure_design.md` and supported via the runtime script in `behavior_pack/scripts`.

### 3. Java-to-Bedrock Asset Pipeline
The project includes a Python-based conversion pipeline to convert high-fidelity Java mod assets into Bedrock-optimized assets:
- texture atlas consolidation
- geometry simplification
- block and material manifest generation
- Bedrock-ready pack outputs

See `tools/java_to_bedrock/`.

### 4. Hooking Documentation
Native desktop hook research is located in `hooking/` and `docs/desktop_native_hooks.md` to keep it clearly separated from the Bedrock add-on structure.

This is important because the desktop C++ engine path is not the same as the Bedrock add-on environment.

## Photon Shaders Integration

The folder `photon_shaders_edu/` contains a Photon-inspired shader module for Minecraft Education Edition with:
- in-game settings UI
- modular settings pages
- toggles for quality, water, atmosphere, and presets
- left-side X close button and right-side back arrow navigation behavior
- texture specs for all required UI backgrounds and icons

The UI logic is implemented in `photon_shaders_edu/behavior_pack/scripts/ui_settings.js`.

## Main Mod Settings UI Behavior

Key UI structure:
- Main menu opens with a list of options
- Each option opens a submenu
- Close button is on the left side of the menu
- Back button uses the arrow symbol `->` on the opposite side (right side)
- Additional mods can be added into the same main menu system as additional buttons

This is intended to match your requested pattern for a mod settings menu that supports nested options.

## Texture Requirements

Per your requirement, the UI texture size specification is:
- 512x512 for menu backgrounds
- 64x64 for icon textures

These sizes are explicitly documented in `photon_shaders_edu/TEXTURE_SPECIFICATIONS.md`.

## Realistic Bedrock Constraint

This framework is intentionally realistic:
- it is built to respect Bedrock’s supported add-on model
- it does not falsely claim to replace Render Dragon directly
- it pushes visual quality as far as possible within Bedrock constraints
- it makes the advanced native rendering research explicit and separate from the actual add-on package

## Recommended Next Step

For a fully production-ready release, the next recommended step would be to add:
- final JSON UI definitions for Bedrock forms
- actual PNG placeholders for each background and icon
- a more advanced asset conversion script
- a packaging script that builds a zip ready for Bedrock import

## Files to Review First

- `photon_shaders_edu/README.md`
- `photon_shaders_edu/TEXTURE_SPECIFICATIONS.md`
- `photon_shaders_edu/behavior_pack/scripts/ui_settings.js`
- `photon_shaders_edu/resource_pack/materials/photon_materials.material.json`
- `tools/java_to_bedrock/README.md`

## License

MIT (for the project structure and templates)

---

This repository is best treated as a technical Bedrock visualization framework and advanced mod-template foundation, not as a direct engine replacement for Render Dragon.
