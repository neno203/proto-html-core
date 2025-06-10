// Stealth payload auto-regenerate and DOM propagation
setInterval(() => {
  const ghost = document.createElement('div');
  ghost.textContent = 'payload-' + Date.now();
  ghost.style.display = 'none';
  document.body.appendChild(ghost);
}, 10000); // every 10 seconds
