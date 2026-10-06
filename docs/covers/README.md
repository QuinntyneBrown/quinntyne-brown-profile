# Project cover sources

Each `*.html` file here is the source of one cover image in `site/covers/`. A cover is a 600×375 page (the card's 16:10 ratio) built from the project's own design tokens, colours, and UI, set inside the profile site's frame (`--tint` background, Archivo, ink). `render.mjs` screenshots each page at 2× and writes a lossless WebP next to the others in `site/covers/`.

| Source | Cover | Project |
| --- | --- | --- |
| `saturdaze.html` | `saturdaze.webp` | [saturdaze](https://github.com/QuinntyneBrown/saturdaze): the Saturday/Sunday timeline, cream and coral palette, sparkle mark. |
| `twinkletune.html` | `twinkletune.webp` | [TwinkleTune](https://github.com/QuinntyneBrown/TwinkleTune): the sing stage with note pills, Twinkle the star coach, sky-to-pink gradient. |
| `loupe.html` | `loupe.webp` | [loupe](https://github.com/QuinntyneBrown/loupe): gallery wall, evidence loupe, cyanotype-blue AI critique. |
| `primer.html` | `primer.webp` | [primer](https://github.com/QuinntyneBrown/primer): `AGENTS.md` hub with pointer files and the plain `verb: path` terminal output. |
| `press-telemetry.html` | `press-telemetry.webp` | [press-telemetry-reference](https://github.com/QuinntyneBrown/press-telemetry-reference): graphite dashboard, cyan pulse mark, MQTT topic chips. |
| `studio.html` | `studio.webp` | [quinntyne-brown-studio](https://github.com/QuinntyneBrown/quinntyne-brown-studio): editorial gallery grid, charcoal business card, serif quote total. |

## Regenerating

```powershell
npm install playwright sharp
npx playwright install chromium
node docs/covers/render.mjs
```

Pass a name to render one cover, for example `node docs/covers/render.mjs loupe`. The order of the cards in `site/index.html` follows the pinned order on the GitHub profile; update both when the pins change.
