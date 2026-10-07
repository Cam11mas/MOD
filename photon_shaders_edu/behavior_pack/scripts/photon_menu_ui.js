import { ActionFormData, ModalFormData } from '@minecraft/server-ui';

export class PhotonMenuUI {
  constructor(modRegistry) {
    this.modRegistry = modRegistry;
    this.menuStack = [];
    this.settings = this.initializeSettings();
  }

  initializeSettings() {
    return {
      quality: 'high',
      pbr: true,
      globalIllumination: true,
      ambientOcclusion: true,
      bloom: true,
      parallax: true,
      subsurfaceScattering: false,
      dynamicLighting: true,
      shadowDistance: 256,
      waterQuality: 'high',
      waves: true,
      caustics: true,
      refraction: true,
      reflection: true,
      foam: true,
      waveHeight: 1.0,
      sky: true,
      fog: true,
      volumetric: true,
      clouds: true,
      fogDensity: 0.5
    };
  }

  pushMenu(menuName) {
    this.menuStack.push(menuName);
  }

  popMenu() {
    if (this.menuStack.length > 0) {
      return this.menuStack.pop();
    }
    return 'main';
  }

  getCurrentMenuLevel() {
    return this.menuStack.length;
  }

  async showMainMenu(player) {
    const form = new ActionFormData();
    form.title('§6§lPHOTON SHADERS §r§6v1.2.0');
    form.body(
      '§7Advanced Visual Framework§r\n' +
      '§8Status: §a✓ Enabled§r\n' +
      '§8━━━━━━━━━━━━━━━━━━━━━━━━§r\n\n' +
      '§7Select a mod to configure its settings:\n'
    );

    const mods = this.modRegistry.getMainMenuEntries();
    mods.forEach(mod => {
      const status = mod.enabled ? '§a[✓]' : '§c[✗]';
      const label = `${mod.icon} ${mod.color}${mod.label}§r`;
      const desc = `§8${mod.description}§r`;
      form.button(`${status} ${label}\n${desc}`);
    });

    const response = await form.show(player);

    if (response.canceled) {
      return;
    }

    const selectedMod = mods[response.selection];
    if (selectedMod) {
      this.pushMenu(selectedMod.id);
      await this.showModMenu(player, selectedMod);
    }
  }

  async showModMenu(player, mod) {
    const form = new ActionFormData();
    form.title(`§6${mod.icon} ${mod.label}`);
    form.body(
      `§7${mod.description}\n` +
      `§8Status: ${mod.enabled ? '§a✓ Enabled' : '§cDisabled'}§r\n` +
      `§8━━━━━━━━━━━━━━━━━━━━━━━━§r\n\n` +
      `§7Adjust settings below:§r\n`
    );

    // Add module-specific settings
    if (mod.submenu === 'photon_settings') {
      form.button('§bQuality Level\n§8Low | Medium | High | Ultra');
      form.button('§bPBR Lighting\n§8Toggle physically-based rendering');
      form.button('§bGlobal Illumination\n§8Toggle indirect lighting');
      form.button('§bAmbient Occlusion\n§8Toggle AO darkening');
      form.button('§bBloom Effect\n§8Toggle bright object glow');
      form.button('§bParallax Mapping\n§8Toggle depth detail');
      form.button('§bSubsurface Scattering\n§8Toggle translucent lighting');
      form.button('§cReset to Default\n§8Restore quality settings');
    } else if (mod.submenu === 'water_settings') {
      form.button('§9Water Quality\n§8Low | Medium | High | Ultra');
      form.button('§9Wave Simulation\n§8Toggle realistic waves');
      form.button('§9Caustics\n§8Toggle caustic patterns');
      form.button('§9Refraction\n§8Toggle light bending');
      form.button('§9Reflection\n§8Toggle water surface reflections');
      form.button('§9Foam Effects\n§8Toggle wave foam');
      form.button('§cReset to Default\n§8Restore water settings');
    } else if (mod.submenu === 'atmosphere_settings') {
      form.button('§eSky Rendering\n§8Toggle sky effects');
      form.button('§eFog Effects\n§8Toggle fog rendering');
      form.button('§eVolumetric Lighting\n§8Toggle light rays');
      form.button('§eCloud Rendering\n§8Toggle cloud rendering');
      form.button('§eRainbow Effects\n§8Toggle rainbows');
      form.button('§eLightning Flashes\n§8Toggle lightning glow');
      form.button('§cReset to Default\n§8Restore atmosphere settings');
    } else if (mod.submenu === 'distant_horizons_settings') {
      form.button('§eLOD Distance\n§8Adjust draw distance');
      form.button('§eTerrain Simplification\n§8Toggle LOD reduction');
      form.button('§eDetail Levels\n§8Set quality tiers');
      form.button('§cReset to Default\n§8Restore LOD settings');
    } else if (mod.submenu === 'conquest_settings') {
      form.button('§dMaterial Pack\n§8Select texture resolution');
      form.button('§dGeometry Detail\n§8Block shape complexity');
      form.button('§dCustom Palettes\n§8Color customization');
      form.button('§cReset to Default\n§8Restore texture settings');
    } else if (mod.submenu === 'performance_settings') {
      form.button('§fCompetitive Preset\n§8Fast & clear (60+ FPS)');
      form.button('§fBalanced Preset\n§8Quality/Performance (40-60 FPS)');
      form.button('§fCinematic Preset\n§8Maximum quality (20-40 FPS)');
      form.button('§fFantasy Preset\n§8Artistic colors (30-50 FPS)');
    }

    form.button('§6← Back to Main Menu', 'textures/ui/icon_back');

    const response = await form.show(player);

    if (response.canceled) {
      this.popMenu();
      await this.showMainMenu(player);
      return;
    }

    // Handle button selection
    if (response.selection === 999) {
      // Back button
      this.popMenu();
      await this.showMainMenu(player);
    } else {
      // Show detail form for selected option
      await this.showSettingDetail(player, mod, response.selection);
    }
  }

  async showSettingDetail(player, mod, settingIndex) {
    const form = new ModalFormData();
    form.title(`${mod.icon} ${mod.label} - Settings`);

    if (mod.submenu === 'photon_settings') {
      if (settingIndex === 0) {
        form.dropdown('Quality Level', ['Low', 'Medium', 'High', 'Ultra'], 2);
        form.submitButton('Apply');
        form.cancelButton('Back');
        const response = await form.show(player);
        if (!response.canceled) {
          this.settings.quality = ['low', 'medium', 'high', 'ultra'][response.formValues[0]];
          player.sendMessage(`§a✓ Quality set to ${['Low', 'Medium', 'High', 'Ultra'][response.formValues[0]]}`);
        }
      } else if (settingIndex === 7) {
        // Reset to default
        this.settings = this.initializeSettings();
        player.sendMessage('§a✓ Photon settings reset to default');
      }
    }

    await this.showModMenu(player, mod);
  }
}

export default PhotonMenuUI;
