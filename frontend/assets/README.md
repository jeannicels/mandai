# Assets

Place your own assets here.

## Suggested structure

- `images/` — photos, sprites, textures (png, jpg, svg, webp)
- `audio/` — sound effects and ambient tracks (mp3, ogg, wav)
- `fonts/` — custom font files (woff, woff2, ttf)
- `data/` — static JSON or CSV data files

Reference assets from your sketches using a relative path, for example:

```js
// in a p5.js preload()
img = loadImage('assets/images/tiger.png');
sound = loadSound('assets/audio/jungle.mp3');
```
