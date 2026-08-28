// Bootstraps the app: reads habitat data bundled with the frontend, builds the
// habitat switcher, and drives a single p5 instance that delegates to the
// active habitat's sketch module (registered on window.MandaiSketches).

const state = {
  habitats: [],
  current: null
};

const CANVAS_W = 900;
const CANVAS_H = 520;

function loadHabitats() {
  const habitats = window.MandaiHabitats;
  if (!Array.isArray(habitats)) {
    throw new Error("Habitat data not found (window.MandaiHabitats)");
  }
  return habitats;
}

function buildNav() {
  const nav = document.getElementById("habitat-nav");
  nav.innerHTML = "";
  state.habitats.forEach((habitat) => {
    const btn = document.createElement("button");
    btn.textContent = habitat.name;
    btn.dataset.id = habitat.id;
    btn.addEventListener("click", () => selectHabitat(habitat.id));
    nav.appendChild(btn);
  });
}

function selectHabitat(id) {
  const habitat = state.habitats.find((h) => h.id === id);
  if (!habitat) return;
  state.current = habitat;

  document.getElementById("tagline").textContent = habitat.tagline;

  document.querySelectorAll("#habitat-nav button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.id === id);
  });

  const sketch = window.MandaiSketches[id];
  if (sketch && window._p5 && sketch.setup) {
    sketch.setup(window._p5, habitat);
  }
}

function makeSketch() {
  return (p) => {
    window._p5 = p;

    p.setup = () => {
      const holder = document.getElementById("sketch-holder");
      p.createCanvas(CANVAS_W, CANVAS_H).parent(holder);
      p.textFont("system-ui");
      if (state.current) {
        const sketch = window.MandaiSketches[state.current.id];
        if (sketch && sketch.setup) sketch.setup(p, state.current);
      }
    };

    p.draw = () => {
      if (!state.current) {
        p.background(10);
        return;
      }
      const sketch = window.MandaiSketches[state.current.id];
      if (sketch && sketch.draw) {
        sketch.draw(p, state.current);
      }
    };
  };
}

function init() {
  try {
    state.habitats = loadHabitats();
  } catch (err) {
    console.error(err);
    document.getElementById("tagline").textContent =
      "Could not load habitat data.";
    return;
  }

  buildNav();

  // Start the p5 instance, then select the first habitat.
  new p5(makeSketch());

  if (state.habitats.length) {
    // Defer until p5 setup has run.
    requestAnimationFrame(() => selectHabitat(state.habitats[0].id));
  }
}

init();
