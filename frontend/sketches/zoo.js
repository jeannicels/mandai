// Zoo (Land) sketch — sunny rainforest with swaying trees and a sun.
(function () {
  window.MandaiSketches = window.MandaiSketches || {};

  let trees = [];

  window.MandaiSketches["zoo"] = {
    setup(p, habitat) {
      trees = Array.from({ length: 8 }, (_, i) => ({
        x: (p.width / 9) * (i + 1),
        h: p.random(120, 220),
        sway: p.random(p.TWO_PI)
      }));
    },
    draw(p, habitat) {
      p.background(habitat.theme.background);

      // Sun
      p.noStroke();
      p.fill(habitat.theme.accent);
      p.circle(90, 90, 80);

      // Ground
      p.fill(20, 60, 40);
      p.rect(0, p.height - 60, p.width, 60);

      // Trees
      for (const t of trees) {
        const wobble = p.sin((p.frameCount + t.sway) * 0.02) * 8;
        p.stroke(80, 50, 30);
        p.strokeWeight(10);
        p.line(t.x, p.height - 60, t.x + wobble, p.height - 60 - t.h);
        p.noStroke();
        p.fill(34, 120, 60);
        p.circle(t.x + wobble, p.height - 60 - t.h, 90);
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
