# Steam Preis Tracker

Ein schlanker, modularer Steam-Preis-Tracker für GitHub Pages.

## Aufbau

- `src/config.js` – Logo-URL, Titel und Footer-Infos
- `src/games/*.js` – ein Spiel pro Datei, einfach kopieren und anpassen
- `scripts/build.mjs` – liest die Module, holt Steam-Preise und erzeugt `dist/`
- `.github/workflows/deploy.yml` – baut automatisch per GitHub Actions und deployed GitHub Pages
- `dist/` – fertige Website, inklusive `rss.xml`

## So fügst du ein Spiel hinzu

1. Kopiere eine Datei aus `src/games/`
2. Passe `slug`, `title`, `appid`, `image`, `note` und `steamUrl` an
3. Push zu GitHub
4. GitHub Actions erzeugt die neuen Seiten und den RSS-Feed automatisch

## Hinweise

- Der Preis kommt zur Build-Zeit direkt aus der Steam Store API.
- Für GitHub Pages wird die generierte `dist/`-Ausgabe veröffentlicht.
- Das Theme kann im Footer zwischen Light und Dark gewechselt werden.
