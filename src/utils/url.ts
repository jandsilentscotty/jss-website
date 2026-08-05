/**
 * GitHub Pages serves project sites from a subfolder (/RepoName/), so every
 * internal link and every /public asset needs that prefix. Wrap them in
 * withBase() and the same code works locally, on a project page, and on a
 * custom domain — the prefix comes from `base` in astro.config.mjs.
 *
 *   withBase('/blog')             → '/JSSWebsite/blog/'
 *   withBase('/images/a.png')     → '/JSSWebsite/images/a.png'
 *   withBase('/#demo')            → '/JSSWebsite/#demo'
 *   withBase('https://apple.com') → unchanged
 *
 * Page URLs get a trailing slash because that is exactly what GitHub Pages
 * serves for a directory — linking without it costs every visitor a redirect.
 * Paths that look like files (they have an extension) are left alone.
 */
const EXTERNAL = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

const looksLikeFile = (pathname: string) => /\.[a-z0-9]+$/i.test(pathname);

function normalisePath(pathname: string): string {
  if (pathname === '' || pathname === '/') return '/';
  const clean = `/${pathname.replace(/^\/+/, '').replace(/\/+$/, '')}`;
  return looksLikeFile(clean) ? clean : `${clean}/`;
}

export function withBase(path: string): string {
  if (!path) return path;
  if (EXTERNAL.test(path) || path.startsWith('#')) return path;

  const base = import.meta.env.BASE_URL.replace(/\/+$/, ''); // '' or '/JSSWebsite'
  const [pathname = '/', hash] = path.split('#');

  return `${base}${normalisePath(pathname)}${hash ? `#${hash}` : ''}`;
}

/** Absolute URL for Open Graph images and structured data. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  return `${site?.origin ?? ''}${withBase(path)}`;
}

/**
 * Canonical URL of the page being rendered.
 * `Astro.url.pathname` already contains the base path, so it must NOT go
 * through withBase() — that is what produced /JSSWebsite/JSSWebsite/.
 */
export function canonicalUrl(url: URL, site: URL | undefined): string {
  return `${site?.origin ?? url.origin}${normalisePath(url.pathname)}`;
}
