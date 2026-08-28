// Night Safari sketch — dark scene with drifting fireflies and a moon.
(function () {
  window.MandaiSketches = window.MandaiSketches || {};

  let fireflies = [];

  window.MandaiSketches["night-safari"] = {
    setup(p, habitat) {
      fireflies = Array.from({ length: 60 }, () => ({
        x: p.random(p.width),
        y: p.random(p.height),
        r: p.random(1.5, 4),
        phase: p.random(p.TWO_PI)
      }));
    },
    draw(p, habitat) {
      p.background(habitat.theme.background);

      // Moon
      p.noStroke();
      p.fill(230, 230, 210);
      p.circle(p.width - 90, 90, 70);

      // Fireflies
      for (const f of fireflies) {
        f.x += p.sin((p.frameCount + f.phase) * 0.01) * 0.4;
        f.y += p.cos((p.frameCount + f.phase) * 0.013) * 0.3;
        const glow = 150 + 105 * p.sin((p.frameCount + f.phase) * 0.05);
        p.fill(255, 220, 120, glow);
        p.circle(f.x, f.y, f.r * 2);
      }

      drawLabel(p, habitat);
    }
  };

  function drawLabel(p, habitat) {
    p.noStroke();
    p.fill(habitat.theme.foreground);
    p.textSize(28);
    p.textAlign(p.LEFT, p.TOP);
    p.text(habitat.name, 24, 24);
  }
})();
