# Zum Cowegis Handbuch beitragen

Danke, dass du mithelfen willst! Es gibt zwei Wege – wähle den, der zu deiner
Änderung passt.

## Kleine Änderung (empfohlen)

Kein Setup nötig, alles läuft im Browser:

1. Öffne die betreffende Seite auf <https://cowegis.github.io/docs/> und klicke
   unten auf **„Seite bearbeiten"**.
2. GitHub legt dir automatisch einen Fork an und öffnet den Webeditor.
3. Ändere den Text, klicke auf **„Commit changes"** bzw. **„Propose changes"**.
4. Öffne den Pull Request. Fertig.

## Größere Änderung / lokal arbeiten

```bash
# Repo forken, dann:
git clone https://github.com/<dein-account>/docs.git
cd docs
nvm use          # Node 22
npm install
npm run dev       # http://localhost:4321/docs/
```

Änderungen als eigenen Branch committen und als Pull Request einreichen.

## Was im Pull Request passiert

Der Workflow `build-check` baut die Seite und prüft alle internen Links.
Grün = mergebar. Schlägt der Build fehl, steht der Grund im Log des Checks.

## Schreibkonventionen

- Deutsch, Anrede **„du"**, Präsens, kurze Sätze.
- Eine Markdown-Datei pro Seite unter `src/content/docs/de/<bereich>/`.
- Frontmatter `title` und `description` sind Pflicht.
- Interne Links **absolut inklusive `base`-Präfix und Locale**, mit
  abschließendem Slash: `/docs/de/redakteure/controls/`. Das `/docs/`-Präfix
  ist nötig, weil die Seite unter `https://cowegis.github.io/docs/` liegt;
  Starlight ergänzt es in Inhaltslinks nicht automatisch. Vom Editor erzeugte
  Links auf andere Seiten bereits so schreiben.
- Screenshots und Bilder nach `src/assets/` legen und relativ referenzieren.
- Eine neue Seite ist einfach eine neue Datei im passenden Verzeichnis – die
  Navigation wird automatisch erzeugt. Die Reihenfolge steuerst du bei Bedarf
  über das Frontmatter `sidebar.order`.

## Struktur der Doku

| Bereich | Zweck |
|---|---|
| `einstieg` | Erste Orientierung, Installation, Schnellstart. Für alle. |
| `redakteure` | Aufgabenorientierte Anleitungen fürs Contao-Backend. |
| `integratoren` | Installation im Projekt, Architektur, Konfiguration, Betrieb. |
| `erweitern` | Eigene Layer-/Icon-Typen, Hydratoren, Events. |
| `referenz` | Nachschlagewerk: DCA-Tabellen, API, Glossar. |
