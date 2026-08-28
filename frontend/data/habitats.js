// Central habitat definitions. Loaded in the browser and exposed on
// window.MandaiHabitats so sketches can be data-driven (colors, animals,
// ambience) without hardcoding in each sketch.
window.MandaiHabitats = [
  {
    id: "night-safari",
    name: "Night Safari",
    tagline: "The world's first nocturnal wildlife park",
    theme: {
      background: "#0b132b",
      accent: "#3a86ff",
      foreground: "#e0e1dd"
    },
    animals: ["Malayan Tiger", "Leopard", "Fruit Bat", "Slow Loris", "Civet"]
  },
  {
    id: "zoo",
    name: "Zoo (Land)",
    tagline: "Open-concept rainforest zoo",
    theme: {
      background: "#1b4332",
      accent: "#f4a261",
      foreground: "#f1faee"
    },
    animals: ["Orangutan", "White Tiger", "Elephant", "Giraffe", "Zebra"]
  },
  {
    id: "river-wonder",
    name: "River Wonder",
    tagline: "Journey along the world's iconic rivers",
    theme: {
      background: "#023047",
      accent: "#00b4d8",
      foreground: "#caf0f8"
    },
    animals: ["Giant Panda", "Manatee", "Giant Otter", "Arapaima", "Red Panda"]
  }
];
