import { world, system } from '@minecraft/server';
import { photonCore } from './photon_core.js';

/**
 * Photon Integration with Advanced Bedrock Framework
 * Connects Photon shader system to the main mod registry
 */

class PhotonFrameworkBridge {
  constructor(framework) {
    this.framework = framework;
    this.photonModConfig = {
      name: 'Photon Shaders',
      type: 'shader',
      version: '1.2.0',
      description: 'Advanced PBR and Global Illumination System',
      author: 'Photon Community',
      enabled: true,
      shaders: [
        {
          name: 'pbr_lighting',
          displayName: 'PBR Lighting',
          description: 'Physically-based rendering with metallic and roughness',
          quality: 'high',
          features: ['pbr', 'metallic', 'roughness', 'ao', 'normal_mapping']
        },
        {
          name: 'global_illumination',
          displayName: 'Global Illumination',
          description: 'Dynamic global illumination for realistic lighting',
          quality: 'ultra',
          features: ['global_illumination', 'radiosity', 'indirect_lighting', 'lightmap']
        },
        {
          name: 'water_system',
          displayName: 'Advanced Water',
          description: 'Realistic water with waves, caustics, refraction and reflection',
          quality: 'high',
          features: ['waves', 'caustics', 'refraction', 'reflection', 'foam']
        },
        {
          name: 'parallax_mapping',
          displayName: 'Parallax Mapping',
          description: 'Depth-based parallax mapping for surface detail',
          quality: 'high',
          features: ['parallax', 'relief_mapping', 'height_mapping']
        },
        {
          name: 'subsurface_scattering',
          displayName: 'Subsurface Scattering',
          description: 'Realistic light penetration for translucent materials',
          quality: 'ultra',
          features: ['sss', 'translucency', 'skin_rendering']
        },
        {
          name: 'bloom_hdr',
          displayName: 'Bloom & HDR',
          description: 'High dynamic range rendering with bloom effects',
          quality: 'high',
          features: ['bloom', 'hdr', 'tone_mapping', 'color_grading']
        }
      ]
    };
  }

  initialize() {
    if (this.framework && this.framework.registerShaderMod) {
      this.framework.registerShaderMod(this.photonModConfig.name, this.photonModConfig);
      world.sendMessage('§a[Photon Bridge] Connected to framework');
    }
  }

  getModConfig() {
    return this.photonModConfig;
  }

  getShaderList() {
    return this.photonModConfig.shaders;
  }
}

export { PhotonFrameworkBridge };
