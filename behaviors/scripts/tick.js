import { world, system } from '@minecraft/server';
import { modManager } from './mod_manager.js';

// Main tick loop for Vulkan Renderer systems

let tickCount = 0;

system.runInterval(() => {
  tickCount++;
  
  // Update mod systems every tick
  const activeMods = modManager.loadedMods.filter(m => m.config.enabled);
  
  // Log status every 20 ticks (1 second)
  if (tickCount % 20 === 0) {
    // Silently update - no spam messages
  }
  
  // Update shader uniforms
  if (tickCount % 1 === 0) {
    // Per-frame shader updates
  }
});

// Player join message
world.afterEvents.playerSpawn.subscribe((event) => {
  const player = event.player;
  if (event.initialSpawn) {
    system.runTimeout(() => {
      player.sendMessage('§a[Education Vulkan Renderer] Active');
      player.sendMessage('§e[Features] Photon Shaders | Distant Horizons 3.3.4 | Conquest Reforged');
      player.sendMessage('§6Type !mods to list all active modifications');
    }, 10);
  }
});

export { tickCount };
