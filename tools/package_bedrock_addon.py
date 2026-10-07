#!/usr/bin/env python3
"""Package a Bedrock addon folder into a zip file for Minecraft Education Edition import."""

from __future__ import annotations

import argparse
import os
import shutil
import zipfile
from pathlib import Path


def build_zip(source_dir: Path, output_zip: Path) -> None:
    if not source_dir.exists():
        raise FileNotFoundError(f"Source directory not found: {source_dir}")

    output_zip.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(output_zip, 'w', compression=zipfile.ZIP_DEFLATED) as zf:
        for root, _, files in os.walk(source_dir):
            for file_name in files:
                file_path = Path(root) / file_name
                arcname = file_path.relative_to(source_dir)
                zf.write(file_path, arcname)

    print(f"Created {output_zip}")


def main() -> None:
    parser = argparse.ArgumentParser(description='Package the Photon Education Edition addon into a zip file.')
    parser.add_argument('--source', default='photon_shaders_edu', help='Source addon folder')
    parser.add_argument('--output', default='photon_shaders_edu.zip', help='Output zip name')
    args = parser.parse_args()

    source_dir = Path(args.source).resolve()
    output_zip = Path(args.output).resolve()
    build_zip(source_dir, output_zip)


if __name__ == '__main__':
    main()
