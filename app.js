const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('downloadBtn');
let tick = 0;

downloadBtn.addEventListener('click', () => {
  // In a real implementation, this would download the JAR
  alert('Mod JAR download ready!\n\nFile: MinecraftEdu-Mod-1.0.0.jar\n\nPlace in: .minecraft/mods/');
});

function drawBackground(time) {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#0d1117');
  gradient.addColorStop(0.5, '#161b22');
  gradient.addColorStop(1, '#0d1117');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Grid overlay
  ctx.strokeStyle = 'rgba(88, 166, 255, 0.1)';
  for (let y = 0; y < canvas.height; y += 32) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
  for (let x = 0; x < canvas.width; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
}

function drawMinecraftBlocks(time) {
  const blockSize = 32;
  const cols = Math.ceil(canvas.width / blockSize);
  const rows = Math.ceil(canvas.height / blockSize);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * blockSize;
      const y = row * blockSize;
      const seed = col * 31 + row * 17 + Math.floor(time / 200);
      const blockType = seed % 5;

      let color = '#1a472a'; // Grass
      if (blockType === 1) color = '#8b7355'; // Dirt
      if (blockType === 2) color = '#4a4a4a'; // Stone
      if (blockType === 3) color = '#d4a574'; // Sand
      if (blockType === 4) color = '#1e90ff'; // Water

      ctx.fillStyle = color;
      ctx.fillRect(x + 1, y + 1, blockSize - 2, blockSize - 2);

      // Block border for 3D effect
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 1, y + 1, blockSize - 2, blockSize - 2);
    }
  }
}

function drawModIndicators(time) {
  const features = [
    { x: 60, y: 60, icon: '🎨', label: 'Shaders' },
    { x: 200, y: 60, icon: '📊', label: 'Blocks' },
    { x: 340, y: 60, icon: '🔬', label: 'Science' },
    { x: 480, y: 60, icon: '⚙️', label: 'Tools' }
  ];

  features.forEach((feat, idx) => {
    const pulse = Math.sin(time * 0.005 + idx) * 0.3 + 0.7;
    ctx.fillStyle = `rgba(88, 166, 255, ${pulse * 0.8})`;
    ctx.beginPath();
    ctx.arc(feat.x, feat.y, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = '24px Arial';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText(feat.icon, feat.x, feat.y + 8);

    ctx.font = '12px Arial';
    ctx.fillStyle = '#58a6ff';
    ctx.fillText(feat.label, feat.x, feat.y + 45);
  });
}

function drawStats(time) {
  ctx.fillStyle = 'rgba(10, 15, 25, 0.85)';
  ctx.fillRect(10, canvas.height - 90, 280, 80);

  ctx.fillStyle = '#58a6ff';
  ctx.font = '16px monospace';
  ctx.fillText('Minecraft Mod Status', 20, canvas.height - 65);

  ctx.fillStyle = '#c9d1d9';
  ctx.font = '13px monospace';
  ctx.fillText('Status: Ready to install', 20, canvas.height - 43);
  ctx.fillText('Version: 1.0.0 for MC 1.20.4', 20, canvas.height - 25);
  ctx.fillText('FPS: ' + Math.floor(1000 / 16), 20, canvas.height - 7);
}

function renderFrame(time) {
  tick = time;
  drawBackground(time);
  drawMinecraftBlocks(time);
  drawModIndicators(time);
  drawStats(time);
  requestAnimationFrame(renderFrame);
}

requestAnimationFrame(renderFrame);