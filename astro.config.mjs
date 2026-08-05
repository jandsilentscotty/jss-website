// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/* ───────────────────────────────────────────────────────────────────────────
   EDIT ME — deployment identity
   ---------------------------------------------------------------------------
   GitHub Pages serves a *project* repo at  https://USER.github.io/REPO/
   and a *user* repo (named USER.github.io) or a custom domain at the root.

   1. Set GITHUB_USER + REPO_NAME below.
   2. If you buy a domain, put it in CUSTOM_DOMAIN and also create the file
      public/CNAME containing just that domain (see README).
   Everything else — canonical URLs, sitemap, Open Graph tags, asset paths —
   is derived from these three values.
   ────────────────────────────────────────────────────────────────────────── */
const GITHUB_USER = 'jandsilentscotty'; // ← your GitHub username
const REPO_NAME = 'JSSWebsite'; // ← your repository name
const CUSTOM_DOMAIN = ''; // ← e.g. 'jandsilentscotty.com' (leave '' if none)

const isUserSite = REPO_NAME.toLowerCase() === `${GITHUB_USER.toLowerCase()}.github.io`;

const site = CUSTOM_DOMAIN
  ? `https://${CUSTOM_DOMAIN}`
  : `https://${GITHUB_USER}.github.io`;

const base = CUSTOM_DOMAIN || isUserSite ? '/' : `/${REPO_NAME}`;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    // Emits /blog/index.html so links work without a server rewrite.
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    build: {
      // Keeps the CSS in a couple of files rather than dozens of tiny requests.
      cssCodeSplit: false,
    },
  },
});
