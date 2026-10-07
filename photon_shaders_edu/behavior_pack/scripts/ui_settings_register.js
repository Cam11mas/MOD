import { world, system } from '@minecraft/server';
import { ActionFormData, ModalFormData } from '@minecraft/server-ui';
import UISettingsManager from './ui_settings.js';

const uiManager = new UISettingsManager();

class PhotonMainSettingsUI {
  constructor() {
    this.enabled = true;
    this.manager = uiManager;
  }

  async openMainMenu(player) {
    const form = new ActionFormData();
    form.title('§l§6Photon Shaders');
    form.body('§7Advanced visual framework for Minecraft Education Edition\n\n§8Status: ' + (this.enabled ? '§aEnabled' : '§cDisabled'));

    const options = this.manager.getMainMenuOptions();
    for (const option of options) {
      form.button(`§l${option.label}\n§8${option.id === 'disable' ? 'Close / Disable' : 'Open submenu'}`);
    }

    try {
      const response = await form.show(player);
      if (response.canceled) return;

      switch (response.selection) {
        case 0:
          this.openSettings(player);
          break;
        case 1:
          this.openPresets(player);
          break;
        case 2:
          this.openWater(player);
          break;
        case 3:
          this.openAtmosphere(player);
          break;
        case 4:
          this.enabled = false;
          player.sendMessage('§c[Photon] Disabled');
          break;
      }
    } catch (error) {
      player.sendMessage(`§c[Photon UI] Error: ${error}`);
    }
  }

  async openSettings(player) {
    this.manager.pushMenu('settings');
    const form = new ModalFormData();
    form.title('§l§6Photon Settings');
    form.dropdown('Quality Level', ['Low', 'Medium', 'High', 'Ultra'], 2);
    form.toggle('PBR Lighting', true);
    form.toggle('Global Illumination', true);
    form.toggle('Atmosphere Effects', true);
    form.toggle('Water Effects', true);
    form.slider('Shadow Distance', 64, 512, 8, 256);

    try {
      const response = await form.show(player);
      if (response.canceled) {
        this.openMainMenu(player);
        return;
      }
      player.sendMessage('§a[Photon] Settings updated');
      this.openMainMenu(player);
    } catch (error) {
      player.sendMessage(`§c[Photon UI] Error: ${error}`);
    }
  }

  async openPresets(player) {
    this.manager.pushMenu('presets');
    const form = new ActionFormData();
    form.title('§l§5Photon Presets');
    form.body('§7Choose a preset or return to the main menu');
    form.button('§aCompetitive');
    form.button('§bBalanced');
    form.button('§dCinematic');
    form.button('§6Fantasy');
    form.button('§l§8-> Back');

    try {
      const response = await form.show(player);
      if (response.canceled) {
        this.openMainMenu(player);
        return;
      }
      if (response.selection === 4) {
        this.openMainMenu(player);
        return;
      }
      player.sendMessage('§a[Photon] Preset applied');
      this.openMainMenu(player);
    } catch (error) {
      player.sendMessage(`§c[Photon UI] Error: ${error}`);
    }
  }

  async openWater(player) {
    this.manager.pushMenu('water');
    const form = new ModalFormData();
    form.title('§l§bPhoton Water');
    form.dropdown('Water Quality', ['Low', 'Medium', 'High', 'Ultra'], 2);
    form.toggle('Wave Simulation', true);
    form.toggle('Caustics', true);
    form.toggle('Refraction', true);
    form.toggle('Reflection', true);
    form.slider('Wave Height', 0.1, 2.0, 0.1, 1.0);

    try {
      const response = await form.show(player);
      if (response.canceled) {
        this.openMainMenu(player);
        return;
      }
      player.sendMessage('§a[Photon] Water settings updated');
      this.openMainMenu(player);
    } catch (error) {
      player.sendMessage(`§c[Photon UI] Error: ${error}`);
    }
  }

  async openAtmosphere(player) {
    this.manager.pushMenu('atmosphere');
    const form = new ModalFormData();
    form.title('§l§3Photon Atmosphere');
    form.toggle('Sky Rendering', true);
    form.toggle('Fog Effects', true);
    form.toggle('Volumetric Lighting', true);
    form.toggle('Cloud Rendering', true);
    form.slider('Fog Density', 0.0, 1.0, 0.1, 0.5);

    try {
      const response = await form.show(player);
      if (response.canceled) {
        this.openMainMenu(player);
        return;
      }
      player.sendMessage('§a[Photon] Atmosphere settings updated');
      this.openMainMenu(player);
    } catch (error) {
      player.sendMessage(`§c[Photon UI] Error: ${error}`);
    }
  }
}

const photonUI = new PhotonMainSettingsUI();

world.beforeEvents.chatSend.subscribe((event) => {
  if (event.message.toLowerCase() === '!photon') {
    event.cancel = true;
    photonUI.openMainMenu(event.sender);
  }
});

export { PhotonMainSettingsUI, photonUI };
