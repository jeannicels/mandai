# Mandai Habitats

Interactive experience for three Mandai habitats — **Night Safari**, **Zoo (Land)**, and **River Wonder** — built with an Express backend and a p5.js frontend.

## Structure

```
mandai/
├── backend/
│   ├── server.js          # Express server: serves frontend + habitat API
│   └── data/
│       └── habitats.js     # Habitat definitions (theme, animals, tagline)
├── frontend/
│   ├── index.html          # App shell, loads p5.js + sketch modules
│   ├── styles.css
│   ├── main.js             # Bootstraps p5, builds habitat switcher
│   └── sketches/
│       ├── nightSafari.js  # Night Safari sketch
│       ├── zoo.js          # Zoo (Land) sketch
│       └── riverWonder.js  # River Wonder sketch
├── package.json
└── .gitignore
```

## Getting started

```bash
npm install
npm run dev      # or: npm start
```

Then open http://localhost:3000

## API

| Method | Route                 | Description                |
| ------ | --------------------- | -------------------------- |
| GET    | `/api/health`         | Server health check        |
| GET    | `/api/habitats`       | List all habitats          |
| GET    | `/api/habitats/:id`   | Get a single habitat by id |

Habitat ids: `night-safari`, `zoo`, `river-wonder`.

## Adding / extending a sketch

Each sketch registers itself on `window.MandaiSketches[<habitatId>]` with a
`setup(p, habitat)` and `draw(p, habitat)` function. `main.js` runs a single
p5 instance and delegates drawing to the active habitat, so adding detail to a
habitat only means editing its file in `frontend/sketches/`.
