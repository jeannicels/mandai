# Animal Assets

Place your animal assets here, organized by habitat and animal.

## Structure

```
animals/
├── night-safari/
│   ├── malayan-tiger/
│   ├── leopard/
│   ├── fruit-bat/
│   ├── slow-loris/
│   └── civet/
├── zoo/
│   ├── orangutan/
│   ├── white-tiger/
│   ├── elephant/
│   ├── giraffe/
│   └── zebra/
└── river-wonder/
    ├── giant-panda/
    ├── manatee/
    ├── giant-otter/
    ├── arapaima/
    └── red-panda/
```

Drop each animal's images/sprites into its own folder. Reference them from a sketch with a relative path, for example:

```js
img = loadImage('assets/animals/zoo/orangutan/orangutan.png');
```
