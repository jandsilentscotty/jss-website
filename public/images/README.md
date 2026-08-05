# Images

Drop your assets here. Every path referenced in `src/data/site.ts` is relative to
`public/`, so `public/images/screenshots/ios-home.png` is written as
`/images/screenshots/ios-home.png`.

Anything you leave as an empty string (`''`) in `site.ts` renders a labelled
placeholder instead of a broken image — so the site always looks finished.

## What goes where

| File | Size | Used by |
| --- | --- | --- |
| `og-image.png` | 1200 × 630 | Social previews. Regenerate with `npm run og`, or replace it with your own design. |
| `screenshots/ios-*.png` | 1179 × 2556 (9:19.5) | iPhone device frames — Product + Hero sections |
| `screenshots/watch-*.png` | 396 × 484 | Apple Watch device frames |
| `portrait.jpg` | 800 × 800 square | About section |
| `avatars/*.jpg` | 200 × 200 square | Testimonial photos |
| `blog/*.png` | 1600 × 900 | Blog post hero images (`heroImage` in frontmatter) |
| `badges/app-store.svg` | any | Apple's official "Download on the App Store" badge — optional |

## The App Store badge

The site ships a styled button that works everywhere. If you would rather use
Apple's official badge, download it from
[Apple's marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/),
save it as `badges/app-store.svg`, and set `links.appStoreBadge` in `site.ts`:

```ts
appStoreBadge: '/images/badges/app-store.svg',
```

Apple requires the badge be used unmodified and at the size they specify, so do
not recolour or crop it.

## Getting screenshots at the right size

In Xcode's Simulator, choose an iPhone 15 Pro (1179 × 2556) or Apple Watch
Series 9 45mm (396 × 484), then **File ▸ Save Screen Shot** (⌘S). Those come out
at exactly the sizes above, so they drop straight into the device frames with no
cropping.

Export as PNG for UI screenshots, JPEG for photos. Keep each file under ~400 KB —
run them through [squoosh.app](https://squoosh.app) if they are bigger.
