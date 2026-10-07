import { world } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';
import { PhotonMenuUI } from './photon_menu_ui.js';
import { ModRegistry } from './mod_registry.js';

// Initialize mod registry
const modRegistry = new ModRegistry();
modRegistry.registerBuiltInMods();

// Initialize Photon menu UI
const photonUI = new PhotonMenuUI(modRegistry);

// Command handler for !photon
world.afterEvents.chatSend.subscribe(event => {
  const message = event.message.trim();

  if (message === '!photon') {
    event.cancel = true;
    photonUI.showMainMenu(event.sender);
  } else if (message === '!photon status') {
    event.cancel = true;
    event.sender.sendMessage(`\u00a76[Photon] Status: \u00a7a✓ Enabled`);
  }
});

world.sendMessage('\u00a76[Photon Shaders] Loaded! Type \u00a7a!photon \u00a76to open the menu.');
