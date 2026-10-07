#!/usr/bin/env python3
"""Generate placeholder UI textures for the Photon menu system.

This script creates SVG placeholder textures in the resource pack folder and can optionally
render PNGs if Pillow is available.
"""

from __future__ import annotations

import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / 'photon_shaders_edu' / 'resource_pack' / 'textures' / 'ui'

ICONS = {
    'settings': ('#00ffff', 'gear'),
    'presets': ('#7a5cff', 'spark'),
    'water': ('#00a8ff', 'waves'),
    'sky': ('#ffd166', 'sun'),
    'close': ('#ff4d4d', 'x'),
    'back': ('#80ffcc', 'arrow')
}

BG_FILES = {
    'main': ('#0a0e1a', '#1d113a', 'Main background'),
    'submenu': ('#0d0b16', '#1f1633', 'Submenu background'),
    'presets': ('#111525', '#311b52', 'Presets background'),
    'water': ('#001a33', '#1c4f72', 'Water background'),
    'atmosphere': ('#87ceeb', '#1e3a5f', 'Atmosphere background')
}


def svg_template(fill_start: str, fill_end: str, label: str, width: int = 512, height: int = 512) -> str:
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{fill_start}"/>
      <stop offset="100%" stop-color="{fill_end}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <g opacity="0.2" stroke="#ffffff" fill="none" stroke-width="1">
    <path d="M0 64 H{width} M0 128 H{width} M0 192 H{width} M0 256 H{width} M0 320 H{width} M0 384 H{width} M0 448 H{width}"/>
    <path d="M64 0 V{height} M128 0 V{height} M192 0 V{height} M256 0 V{height} M320 0 V{height} M384 0 V{height} M448 0 V{height}"/>
  </g>
  <rect x="18" y="18" width="{width-36}" height="{height-36}" fill="none" stroke="#7dd3fc" stroke-width="2" opacity="0.8"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" fill="#ffffff" font-size="26" opacity="0.75">{label}</text>
</svg>
'''


def svg_icon(color: str, glyph: str, width: int = 64, height: int = 64) -> str:
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <rect width="100%" height="100%" rx="12" fill="#101827"/>
  <circle cx="32" cy="32" r="22" fill="none" stroke="{color}" stroke-width="3" opacity="0.9"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" fill="{color}" font-size="24" font-weight="bold">{glyph}</text>
</svg>
'''


def write_svg(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding='utf-8')


def generate() -> None:
    backgrounds = TARGET / 'backgrounds'
    icons = TARGET / 'icons'
    for name, colors in BG_FILES.items():
        fill_start, fill_end, label = colors
        write_svg(backgrounds / f'ui_{name}_background.svg', svg_template(fill_start, fill_end, label, 512, 512))

    for name, (color, glyph) in ICONS.items():
        write_svg(icons / f'ui_icon_{name}.svg', svg_icon(color, glyph, 64, 64))

    readme = TARGET / 'README.txt'
    readme.write_text(
        'This directory contains placeholder UI assets for settings menus.\n'
        'Texture sizes: 512x512 for backgrounds, 64x64 for icons.\n'
        'These are SVG placeholders and can be converted to PNGs for Bedrock packaging.\n',
        encoding='utf-8'
    )

    print(f'Created placeholder UI assets at {TARGET}')


if __name__ == '__main__':
    generate()
