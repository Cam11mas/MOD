export class ModRegistry {
  constructor() {
    this.mods = new Map();
  }

  register(mod) {
    this.mods.set(mod.id, mod);
  }

  getAll() {
    return Array.from(this.mods.values());
  }

  getMainMenuEntries() {
    return this.getAll().map(mod => ({
      id: mod.id,
      label: mod.label,
      icon: mod.icon || 'textures/ui/icons/default.png',
      enabled: mod.enabled !== false
    }));
  }

  addBuiltInMods() {
    const builtIn = [
      { id: 'photon', label: 'Photon', icon: 'textures/ui/icons/settings.png', enabled: true },
      { id: 'distant_horizons', label: 'Distant Horizons', icon: 'textures/ui/icons/water.png', enabled: true },
      { id: 'conquest_reforged', label: 'Conquest Reforged', icon: 'textures/ui/icons/presets.png', enabled: true }
    ];
    builtIn.forEach(mod => this.register(mod));
  }
}

export default ModRegistry;
