export class UISettingsManager {
  constructor() {
    this.menuStack = [];
    this.currentState = {
      enabled: true,
      currentPage: 'main',
      activeSubmenu: null,
      settings: {
        quality: 'high',
        pbr: true,
        lighting: true,
        water: true,
        atmosphere: true,
        shadows: 256
      }
    };
  }

  pushMenu(pageName) {
    this.menuStack.push(this.currentState.currentPage);
    this.currentState.currentPage = pageName;
  }

  popMenu() {
    if (this.menuStack.length > 0) {
      this.currentState.currentPage = this.menuStack.pop();
      return true;
    }
    return false;
  }

  getMainMenuOptions() {
    return [
      { id: 'settings', label: 'Settings' },
      { id: 'presets', label: 'Presets' },
      { id: 'water', label: 'Water' },
      { id: 'atmosphere', label: 'Atmosphere' },
      { id: 'disable', label: 'Disable' }
    ];
  }

  openMainMenu() {
    this.currentState.currentPage = 'main';
    this.menuStack = [];
    return this.getMainMenuOptions();
  }

  openSettingsSubmenu() {
    this.pushMenu('settings');
    return {
      title: 'Photon Settings',
      fields: [
        { type: 'dropdown', key: 'quality', label: 'Quality Level', value: this.currentState.settings.quality, options: ['Low', 'Medium', 'High', 'Ultra'] },
        { type: 'toggle', key: 'pbr', label: 'PBR Lighting', value: this.currentState.settings.pbr },
        { type: 'toggle', key: 'lighting', label: 'Global Illumination', value: this.currentState.settings.lighting },
        { type: 'toggle', key: 'water', label: 'Water Effects', value: this.currentState.settings.water },
        { type: 'toggle', key: 'atmosphere', label: 'Atmosphere Effects', value: this.currentState.settings.atmosphere },
        { type: 'slider', key: 'shadows', label: 'Shadow Distance', value: this.currentState.settings.shadows, min: 64, max: 512 }
      ]
    };
  }

  openPresetsSubmenu() {
    this.pushMenu('presets');
    return {
      title: 'Photon Presets',
      presets: [
        { id: 'competitive', label: 'Competitive', description: 'Fast & clear' },
        { id: 'balanced', label: 'Balanced', description: 'Best quality/performance' },
        { id: 'cinematic', label: 'Cinematic', description: 'Maximum quality' },
        { id: 'fantasy', label: 'Fantasy', description: 'Artistic colors' }
      ]
    };
  }

  openWaterSubmenu() {
    this.pushMenu('water');
    return {
      title: 'Water Settings',
      fields: [
        { type: 'dropdown', key: 'waterQuality', label: 'Water Quality', value: 'high', options: ['Low', 'Medium', 'High', 'Ultra'] },
        { type: 'toggle', key: 'waves', label: 'Wave Simulation', value: true },
        { type: 'toggle', key: 'caustics', label: 'Caustics', value: true },
        { type: 'toggle', key: 'refraction', label: 'Refraction', value: true },
        { type: 'toggle', key: 'reflection', label: 'Reflection', value: true }
      ]
    };
  }

  openAtmosphereSubmenu() {
    this.pushMenu('atmosphere');
    return {
      title: 'Atmosphere Settings',
      fields: [
        { type: 'toggle', key: 'sky', label: 'Sky Rendering', value: true },
        { type: 'toggle', key: 'fog', label: 'Fog Effects', value: true },
        { type: 'toggle', key: 'volumetric', label: 'Volumetric Lighting', value: true },
        { type: 'toggle', key: 'clouds', label: 'Cloud Rendering', value: true }
      ]
    };
  }

  getCloseButtonPosition() {
    return { side: 'left', anchor: 'top-left', size: '48x48' };
  }

  getBackButtonPosition() {
    return { side: 'right', anchor: 'bottom-right', size: '48x48', glyph: '->' };
  }
}

export default UISettingsManager;
