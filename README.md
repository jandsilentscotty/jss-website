# J & Silent Scotty — app marketing site

A static marketing site for an iOS + Apple Watch app, built with [Astro](https://astro.build)
and deployed to GitHub Pages. No database, no server, no client-side framework — just HTML,
CSS and about 4 KB of JavaScript.

```
npm install       # once
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ exactly as GitHub Pages will
npm run og        # regenerate the social preview image + touch icon
```

---

## 1. Project structure

```
├── astro.config.mjs          ← deployment identity (edit the 3 constants at top)
├── .github/workflows/
│   └── deploy.yml            ← builds + publishes on every push to main
├── public/                   ← copied verbatim; referenced as /images/…
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   ├── .nojekyll
│   └── images/               ← your screenshots go here (see images/README.md)
├── scripts/
│   └── generate-og.mjs       ← npm run og
└── src/
    ├── data/site.ts          ← ★ ALL CONTENT LIVES HERE
    ├── content.config.ts     ← blog frontmatter schema
    ├── content/blog/*.md     ← one Markdown file per post
    ├── styles/global.css     ← design tokens + shared components
    ├── utils/                ← url.ts (base paths), date.ts, posts.ts
    ├── layouts/BaseLayout.astro
    ├── components/
    │   ├── BaseHead.astro    ← every meta tag, OG tag and JSON-LD block
    │   ├── Header · Footer · Icon · SectionHead · DeviceFrame · StoreButtons
    │   └── Hero · Positioning · Product · Demo · Proof · About
    │       · YouTubeSection · BlogTeaser · CTASection · Contact
    └── pages/
        ├── index.astro       ← composes the homepage sections in order
        ├── blog/index.astro · blog/[...slug].astro
        ├── privacy.astro · terms.astro · 404.astro
        └── rss.xml.ts
```

Reordering the homepage is just moving lines in `src/pages/index.astro`. Deleting a section is
deleting its line — nothing else breaks.
