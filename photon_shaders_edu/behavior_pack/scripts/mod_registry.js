export class ModRegistry {
  constructor() {
    this.mods = new Map();
    this.builtInMods = [];
  }

  registerBuiltInMods() {
    this.builtInMods = [
      {
        id: 'photon_core',
        label: 'Photon Shaders',
        description: 'Advanced PBR rendering & effects',
        icon: '⚙️',
        color: '§b',
        enabled: true,
        submenu: 'photon_settings'
      },
      {
        id: 'distant_horizons',
        label: 'Distant Horizons',
        description: 'LOD terrain rendering system',
        icon: '🌍',
        color: '§e',
        enabled: true,
        submenu: 'distant_horizons_settings'
      },
      {
        id: 'conquest_reforged',
        label: 'Conquest Reforged',
        description: 'Advanced material & texture pack',
        icon: '🎨',
        color: '§d',
        enabled: true,
        submenu: 'conquest_settings'
      },
      {
        id: 'advanced_water',
        label: 'Advanced Water',
        description: 'Enhanced water rendering system',
        icon: '💧',
        color: '§9',
        enabled: true,
        submenu: 'water_settings'
      },
      {
        id: 'atmospheric_fx',
        label: 'Atmospheric FX',
        description: 'Sky, fog, and lighting effects',
        icon: '☁️',
        color: '§7',
        enabled: true,
        submenu: 'atmosphere_settings'
      },
      {
        id: 'performance_tuner',
        label: 'Performance Tuner',
        description: 'Optimization & quality presets',
        icon: '⚡',
        color: '§f',
        enabled: true,
        submenu: 'performance_settings'
      }
    ];

    this.builtInMods.forEach(mod => this.mods.set(mod.id, mod));
  }

  getAll() {
    return Array.from(this.mods.values());
  }

  getEnabled() {
    return this.getAll().filter(mod => mod.enabled);
  }

  toggle(modId) {
    const mod = this.mods.get(modId);
    if (mod) {
      mod.enabled = !mod.enabled;
      return mod.enabled;
    }
    return false;
  }

  getMainMenuEntries() {
    return this.getEnabled().map(mod => ({
      id: mod.id,
      label: mod.label,
      description: mod.description,
      icon: mod.icon,
      color: mod.color,
      submenu: mod.submenu
    }));
  }
}

export default ModRegistry;
