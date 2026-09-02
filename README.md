# Cowegis Handbuch

Quelltext des Cowegis-Handbuchs – <https://cowegis.github.io/docs/>.

Die Website wird mit [Astro](https://astro.build/) und
[Starlight](https://starlight.astro.build/) gebaut; alle Inhalte liegen als
Markdown unter `src/content/docs/de/`.

## Lokale Entwicklung

```bash
nvm use          # Node 22 (siehe .nvmrc)
npm install
npm run dev       # Dev-Server auf http://localhost:4321/docs/
```

Weitere Skripte: `npm run build` (Produktions-Build nach `dist/`, inklusive
interner Link-Prüfung), `npm run preview` (Build lokal ansehen),
`npm run check` (TypeScript- und Content-Schema-Prüfung).

## Beitragen

Kleine Korrekturen gehen direkt über den „Seite bearbeiten"-Link am Ende jeder
Seite – kein lokales Setup nötig. Details und Schreibkonventionen stehen in
[`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Build & Deployment

Ein Push auf `main` löst den Workflow `.github/workflows/deploy.yml` aus, der
die Seite baut und auf GitHub Pages veröffentlicht. Pull Requests werden vom
Workflow `build-check.yml` gebaut und auf gebrochene interne Links geprüft.

## Zweisprachigkeit später aktivieren

Die Struktur ist auf `de`/`en` vorbereitet. Um Englisch zu aktivieren:

1. In `astro.config.mjs` die Zeile `en: { label: 'English', lang: 'en' }`
   einkommentieren.
2. `src/content/docs/en/` als Spiegel von `de/` anlegen (gleiche Pfade).
3. Nicht übersetzte Seiten fallen automatisch auf die deutsche Fassung zurück;
   Starlight zeigt einen Hinweis „nicht übersetzt".

Kein Datei-Umzug, kein Framework-Wechsel.

## Eigene Domain später

`base` in `astro.config.mjs` auf `/` setzen und `public/CNAME` mit der Domain
anlegen. Aktuell nicht umgesetzt.

## Lizenz

Die Dokumentationsinhalte stehen unter
[Creative Commons Attribution 4.0 International (CC BY 4.0)](./LICENSE).
