import { world, system } from '@minecraft/server';
import { VulkanRenderer } from './renderer_init.js';
import { shaderSystem, photonHandler, lodSystem, conquestSupport } from './shader_system.js';

// Mod Manager for Education Vulkan Renderer
// Handles mod loading, enabling/disabling, and compatibility

class ModManager {
  constructor() {
    this.loadedMods = [];
    this.modSettings = new Map();
    this.compatibilityChecks = new Map();
    this.initializeModSystem();
  }

  initializeModSystem() {
    // Register built-in compatibility modules
    this.registerMod('photon_shaders', {
      version: '3.2.0',
      enabled: true,
      features: ['advanced_lighting', 'global_illumination', 'pbr']
    });

    this.registerMod('distant_horizons', {
      version: '3.3.4',
      enabled: true,
      features: ['lod_system', 'extended_render_distance', 'chunk_optimization']
    });

    this.registerMod('conquest_reforged', {
      version: '2.0.0',
      enabled: true,
      features: ['custom_meshes', 'micro_geometry', 'detailed_texturing']
    });

    this.registerMod('vulkan_core', {
      version: '1.0.0',
      enabled: true,
      features: ['vulkan_rendering', 'advanced_shaders', 'high_performance']
    });
  }

  registerMod(name, config) {
    this.loadedMods.push({
      name: name,
      config: config,
      status: 'active'
    });
    world.sendMessage(`§a[ModManager] Registered mod: ${name} v${config.version}`);
  }

  enableMod(name) {
    const mod = this.loadedMods.find(m => m.name === name);
    if (mod) {
      mod.config.enabled = true;
      mod.status = 'active';
      world.sendMessage(`§a[ModManager] Enabled: ${name}`);
    }
  }

  disableMod(name) {
    const mod = this.loadedMods.find(m => m.name === name);
    if (mod) {
      mod.config.enabled = false;
      mod.status = 'inactive';
      world.sendMessage(`§c[ModManager] Disabled: ${name}`);
    }
  }

  getModInfo() {
    return this.loadedMods.map(m => ({
      name: m.name,
      version: m.config.version,
      enabled: m.config.enabled,
      features: m.config.features.join(', ')
    }));
  }

  listMods() {
    world.sendMessage('§e[ModManager] Loaded Mods:');
    this.loadedMods.forEach(mod => {
      const status = mod.config.enabled ? '§a✓' : '§c✗';
      world.sendMessage(`${status} ${mod.name} v${mod.config.version}`);
    });
  }
}

const modManager = new ModManager();

// Chat commands for mod management
world.beforeEvents.chatSend.subscribe((event) => {
  const message = event.message;

  if (message.startsWith('!mods')) {
    modManager.listMods();
    event.cancel = true;
  }

  if (message.startsWith('!enable ')) {
    const modName = message.slice(8).trim();
    modManager.enableMod(modName);
    event.cancel = true;
  }

  if (message.startsWith('!disable ')) {
    const modName = message.slice(9).trim();
    modManager.disableMod(modName);
    event.cancel = true;
  }

  if (message === '!vulkan-status') {
    const renderer = new VulkanRenderer();
    const stats = renderer.getRenderingStats();
    world.sendMessage(`§e[Vulkan] Engine: ${stats.engine}`);
    world.sendMessage(`§e[Vulkan] Status: ${stats.status}`);
    world.sendMessage(`§e[Vulkan] Active Shaders: ${stats.shaderCount}`);
    event.cancel = true;
  }
});

export { ModManager, modManager };
