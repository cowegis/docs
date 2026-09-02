// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// Eigene Domain später: `base` auf '/' setzen und public/CNAME anlegen.
//
// Englisch aktivieren:
// 1. Unten die Zeile `en: { label: 'English', lang: 'en' }` einkommentieren.
// 2. src/content/docs/en/ als Spiegel von de/ anlegen (gleiche Pfade).
// 3. Nicht übersetzte Seiten fallen automatisch auf die deutsche Fassung
//    zurück; Starlight zeigt einen Hinweis „nicht übersetzt".
// Kein Datei-Umzug, kein Framework-Wechsel.
export default defineConfig({
  site: 'https://cowegis.github.io',
  base: '/docs/',
  // Starlight erzeugt bei einer benannten Locale keinen Root-Redirect mehr.
  // Damit `/docs/` auf `/docs/de/` weiterleitet, hier explizit setzen.
  // Beim Aktivieren von Englisch ggf. auf eine Sprachwahl-Seite ändern.
  redirects: {
    '/': '/docs/de/',
  },
  integrations: [
    starlight({
      title: 'Cowegis Handbuch',
      description:
        'Dokumentation für den Cowegis-Stack – interaktive Karten mit Contao.',
      defaultLocale: 'de',
      locales: {
        de: { label: 'Deutsch', lang: 'de' },
        // Englisch aktivieren: nächste Zeile einkommentieren und
        // src/content/docs/en/ als Spiegel von de/ anlegen.
        // en: { label: 'English', lang: 'en' },
      },
      logo: {
        src: './src/assets/cowegis-logo.svg',
        alt: 'Cowegis',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/cowegis' },
      ],
      editLink: {
        baseUrl: 'https://github.com/cowegis/docs/edit/main/',
      },
      lastUpdated: true,
      plugins: [starlightLinksValidator()],
      // Seit Starlight v0.39 muss eine autogenerierte Gruppe mit eigenem Label
      // als { label, items: [{ autogenerate: { directory } }] } notiert werden.
      sidebar: [
        { label: 'Einstieg', items: [{ autogenerate: { directory: 'einstieg' } }] },
        { label: 'Für Redakteure', items: [{ autogenerate: { directory: 'redakteure' } }] },
        { label: 'Für Integratoren', items: [{ autogenerate: { directory: 'integratoren' } }] },
        { label: 'Stack erweitern', items: [{ autogenerate: { directory: 'erweitern' } }] },
        { label: 'Referenz', items: [{ autogenerate: { directory: 'referenz' } }] },
      ],
    }),
  ],
});
