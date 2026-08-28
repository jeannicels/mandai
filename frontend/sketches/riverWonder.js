// River Wonder sketch — flowing water with ripples and floating bubbles.
(function () {
  window.MandaiSketches = window.MandaiSketches || {};

  let bubbles = [];

  window.MandaiSketches["river-wonder"] = {
    setup(p, habitat) {
      bubbles = Array.from({ length: 40 }, () => ({
        x: p.random(p.width),
        y: p.random(p.height),
        r: p.random(3, 10),
        speed: p.random(0.4, 1.4)
      }));
    },
    draw(p, habitat) {
      p.background(habitat.theme.background);

      // Flowing water bands
      p.noStroke();
      for (let y = 0; y < p.height; y += 24) {
        const offset = p.sin((p.frameCount * 0.02) + y * 0.05) * 20;
        p.fill(0, 150, 200, 40);
        p.rect(offset, y, p.width, 12);
      }

      // Rising bubbles
      for (const b of bubbles) {
        b.y -= b.speed;
        b.x += p.sin((p.frameCount + b.y) * 0.03) * 0.5;
        if (b.y < -10) {
          b.y = p.height + 10;
          b.x = p.random(p.width);
        }
        p.fill(200, 240, 255, 120);
        p.circle(b.x, b.y, b.r);
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
