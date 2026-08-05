/* ═══════════════════════════════════════════════════════════════════════════
   SITE CONTENT — this is the only file you need to edit for day-to-day copy.
   ═══════════════════════════════════════════════════════════════════════════

   Anything in [Square Brackets] is a placeholder waiting on your input.
   Search the project for "[" to find every one of them at once.

   Image paths are relative to the /public folder:
     "/images/screenshots/ios-home.png"  →  public/images/screenshots/ios-home.png
   Leave an image path as an empty string ("") and the site renders a labelled
   placeholder frame instead of a broken image — so nothing ever looks unfinished.
   ═══════════════════════════════════════════════════════════════════════════ */

/* ─── 1. IDENTITY ───────────────────────────────────────────────────────── */

export const brand = {
  /** Your company / creator name. Appears in the header, footer and <title>. */
  name: 'J & Silent Scotty',
  /** Short form used in tight spaces (mobile header, favicon-adjacent marks). */
  shortName: 'J&SS',
  /** The app this site is selling. */
  appName: '[App Name]',
  /** Six words max. Sits under the logo in the footer. */
  tagline: '[App Tagline — six words max]',
  /** Used for the copyright line and legal pages. */
  legalName: '[Company/Legal Name]',
  email: 'jandsilentscotty@gmail.com',
} as const;

/* ─── 2. SEO DEFAULTS ───────────────────────────────────────────────────── */

export const seo = {
  /** ~55 chars. Shown in the browser tab and as the Google result headline. */
  defaultTitle: `${brand.appName} — Train harder, track less`,
  /** 150–160 chars. This is your Google search snippet. Make it a sales line. */
  defaultDescription:
    '[App Name] is the iOS and Apple Watch training app for lifters who want every set logged in one tap — so you can focus on the work, not the paperwork.',
  /** Social preview image (1200×630). Regenerate with: npm run og */
  ogImage: '/images/og-image.png',
  /** Twitter/X handle for the summary card attribution. */
  twitterHandle: '@JnsilentScotty',
  /** Two-letter language code for <html lang>. */
  locale: 'en',
} as const;

/* ─── 3. LINKS ──────────────────────────────────────────────────────────── */

export const links = {
  /** Live App Store listing. Until it exists, the CTA reads "Coming soon". */
  appStore: '[App Store link]',
  /** Optional: Apple's official black "Download on the App Store" badge.
   *  Download it from developer.apple.com/app-store/marketing/guidelines/,
   *  save it as public/images/badges/app-store.svg, then set the path here.
   *  Leave '' to use the built-in styled button instead. */
  appStoreBadge: '',
  /** Public TestFlight invite link. */
  testFlight: '[TestFlight link]',
  /** Newsletter form endpoint (Buttondown / Mailchimp / ConvertKit / Formspree).
   *  Leave as the placeholder and the form becomes a prefilled email link. */
  newsletterEndpoint: '[Newsletter endpoint]',
  /** Contact form endpoint (Formspree / Basin / Web3Forms).
   *  Leave as the placeholder and the form becomes a prefilled email link. */
  contactEndpoint: '[Contact form endpoint]',
} as const;

export const socials = [
  {
    label: 'YouTube',
    icon: 'youtube',
    url: 'https://www.youtube.com/@JnSilentScotty?sub_confirmation=1',
    handle: '@JnSilentScotty',
  },
  {
    label: 'TikTok',
    icon: 'tiktok',
    url: 'https://www.tiktok.com/@jandsilentscotty',
    handle: '@jandsilentscotty',
  },
  {
    label: 'Instagram',
    icon: 'instagram',
    url: 'https://www.instagram.com/jandsilentscotty',
    handle: '@jandsilentscotty',
  },
  {
    label: 'X',
    icon: 'x',
    url: 'https://x.com/JnsilentScotty',
    handle: '@JnsilentScotty',
  },
  {
    label: 'Threads',
    icon: 'threads',
    url: 'https://www.threads.com/@jandsilentscotty',
    handle: '@jandsilentscotty',
  },
  {
    label: 'Buy Me a Coffee',
    icon: 'coffee',
    url: 'https://buymeacoffee.com/jandsilentscotty',
    handle: 'Support the build',
  },
] as const;

/* ─── 4. NAVIGATION ─────────────────────────────────────────────────────── */
/* Keep this to 5 items or fewer — every extra link costs you clarity. */

export const nav = [
  { label: 'Product', href: '/#product' },
  { label: 'Videos', href: '/#youtube' },
  { label: 'About', href: '/#about' },
] as const;

/* ─── 5. HERO ───────────────────────────────────────────────────────────── */

export const hero = {
  /** Small pill above the headline. Great spot for launch status. */
  eyebrow: 'Now in TestFlight',
  /** ONE sentence. What it is, who it's for. Not a slogan — a statement. */
  headline: 'The training log that keeps up with your workout.',
  /** 1–2 sentences. Name the person and the problem you remove. */
  subhead:
    'Built for lifters who are tired of fighting their phone between sets. [App Name] logs every set from your wrist, remembers what you lifted last time, and gets out of the way.',
  primaryCta: { label: 'Join the TestFlight', href: links.testFlight },
  secondaryCta: { label: 'See it in action', href: '#product' },
  /** Small reassurance line under the buttons. */
  ctaNote: 'Free while in beta · iPhone + Apple Watch · No account required',
  /** Hero screenshots. Empty string → labelled placeholder frame. */
  phoneScreenshot: '',
  watchScreenshot: '',
} as const;

/* ─── 6. POSITIONING — who it's for, what it fixes ──────────────────────── */

export const positioning = {
  heading: 'Made for one person in particular',
  subheading:
    'Not a habit tracker. Not a social network. A training log for people who actually train.',
  audience: [
    {
      title: 'You lift 3–6 days a week',
      body: 'Progressive overload only works if you remember last week. [App Name] surfaces your previous numbers before you touch the bar.',
    },
    {
      title: 'You hate typing between sets',
      body: 'Logging a set is one tap on your wrist. Your phone can stay in your bag for the entire session.',
    },
    {
      title: 'You want proof it is working',
      body: 'Volume, PRs and streaks roll up automatically. No spreadsheets, no manual charting, no export ritual.',
    },
  ],
} as const;

/* ─── 7. PRODUCT — the two apps ─────────────────────────────────────────── */

export const products = [
  {
    id: 'ios',
    kicker: 'iPhone',
    title: 'Plan the session. Review the progress.',
    body: 'The iPhone app is where you build routines, dig into history and see the trend lines that tell you whether the block is working.',
    device: 'iphone' as const,
    /** Up to 3 — they become the phone frames in this block. */
    screenshots: [
      { src: '', label: '[Screenshot: Home / Today]' },
      { src: '', label: '[Screenshot: Workout detail]' },
      { src: '', label: '[Screenshot: Progress charts]' },
    ],
    features: [
      'Build routines once, reuse them forever',
      'Full lift history with per-exercise trends',
      'Apple Health sync, on your terms',
    ],
  },
  {
    id: 'watch',
    kicker: 'Apple Watch',
    title: 'The whole workout, from your wrist.',
    body: 'The Watch app is the point. Start, log, rest and finish without ever unlocking your phone — and it keeps working when the signal does not.',
    device: 'watch' as const,
    screenshots: [
      { src: '', label: '[Screenshot: Watch — active set]' },
      { src: '', label: '[Screenshot: Watch — rest timer]' },
    ],
    features: [
      'One-tap set logging with the Digital Crown',
      'Rest timer with a haptic tap when time is up',
      'Works fully offline, syncs when you are back',
      'Complication puts today’s session one tap away',
    ],
  },
] as const;

/* ─── 8. LIVE DEMO ──────────────────────────────────────────────────────── */

export const demo = {
  heading: 'Try it right here',
  subheading:
    'An interactive preview of the real interface — tap through the screens the way you would mid-session. No download, no signup.',
  /** Set to a real URL (WebContainer, Appetize.io, a video) when you have one.
   *  While empty, the built-in interactive mock below is shown instead. */
  embedUrl: '',
  note: 'Interactive preview · Replace with a live Appetize.io embed or screen recording when ready',
} as const;

/* ─── 9. PROOF ──────────────────────────────────────────────────────────── */

export const proof = {
  heading: 'Early users, early numbers',
  subheading: 'Swap these for real quotes and metrics as soon as you have them.',
  stats: [
    { value: '[Stat]', label: 'Beta testers' },
    { value: '[Stat]', label: 'Workouts logged' },
    { value: '[Stat]', label: 'Average rating' },
    { value: '[Stat]', label: 'Weeks in development' },
  ],
  testimonials: [
    {
      quote:
        '[Testimonial quote — one specific thing the app changed about their training. Specific beats glowing.]',
      name: '[Reviewer Name]',
      role: '[Role / how they train]',
      avatar: '',
    },
    {
      quote:
        '[Testimonial quote — ideally mentions the Watch app, since that is the differentiator.]',
      name: '[Reviewer Name]',
      role: '[Role / how they train]',
      avatar: '',
    },
    {
      quote: '[Testimonial quote — from someone who switched from a spreadsheet or a competitor.]',
      name: '[Reviewer Name]',
      role: '[Role / how they train]',
      avatar: '',
    },
  ],
} as const;

/* ─── 10. ABOUT ─────────────────────────────────────────────────────────── */

export const about = {
  heading: 'Why I built this',
  name: '[Your Name]',
  role: '[Your Role — e.g. Indie iOS developer & lifter]',
  photo: '', // e.g. '/images/portrait.jpg'
  /** Each string is its own paragraph. */
  paragraphs: [
    'I am [Your Name] — one half of J & Silent Scotty, where we document the grind in the gym and on the leaderboards. [Add a sentence about your background: what you do, how long you have been building, what you trained for.]',
    'I built [App Name] because [describe the specific moment the idea landed — the set you forgot, the spreadsheet that broke, the app that wanted a subscription before it would show you your own data].',
    'It is built by one person who uses it every session. That means it stays small, it stays fast, and every feature has to earn its place. [Add anything about your roadmap or philosophy here.]',
  ],
  /** Short credibility bullets. Keep them concrete. */
  facts: [
    '[Years] years training',
    '[Number] subscribers on YouTube',
    'Built solo in Swift & SwiftUI',
    'Based in [Location]',
  ],
} as const;

/* ─── 11. YOUTUBE ───────────────────────────────────────────────────────── */
/* Get an ID from the watch URL: youtube.com/watch?v=THIS_PART_HERE          */

export const youtube = {
  heading: 'Watch the build',
  subheading:
    'Training sessions, gaming nights and the occasional look behind the scenes of building [App Name].',
  channelUrl: 'https://www.youtube.com/@JnSilentScotty?sub_confirmation=1',
  channelHandle: '@JnSilentScotty',
  videos: [
    { id: '[YouTube Video ID]', title: '[Video title — e.g. Building the Watch app in a weekend]' },
    { id: '[YouTube Video ID]', title: '[Video title — e.g. Full push day, logged entirely on Watch]' },
  ],
} as const;

/* ─── 12. FINAL CTA ─────────────────────────────────────────────────────── */

export const cta = {
  heading: 'Get [App Name] on your wrist',
  subheading:
    'The beta is open and the roadmap is public. Join now and help decide what gets built next.',
  newsletter: {
    heading: 'Launch updates, once a month',
    body: 'One email when the app ships, and short notes on what changed. No spam, unsubscribe any time.',
    buttonLabel: 'Subscribe',
    placeholder: 'you@example.com',
  },
} as const;

/* ─── 13. CONTACT ───────────────────────────────────────────────────────── */

export const contact = {
  heading: 'Get in touch',
  subheading:
    'Bug report, feature request, press enquiry or a collab — all of it lands in the same inbox and I read everything.',
  responseTime: 'Usually replies within [2 business days]',
} as const;

/* ─── 14. LEGAL ─────────────────────────────────────────────────────────── */

export const legal = {
  effectiveDate: '[Effective Date]',
  jurisdiction: '[Jurisdiction — e.g. the State of New York, USA]',
  /** Set to '' if you never add analytics — the privacy page adapts. */
  analyticsProvider: '[Analytics provider — e.g. Plausible, or leave blank if none]',
} as const;

/* ─── HELPERS (no need to edit below) ───────────────────────────────────── */

/** True when a value is still an unfilled [Placeholder]. */
export function isPlaceholder(value: string | undefined | null): boolean {
  return !value || (value.trim().startsWith('[') && value.trim().endsWith(']'));
}

/** A prefilled mailto: link, used as the no-backend fallback for forms. */
export function mailto(subject: string, body = ''): string {
  const params = new URLSearchParams({ subject, ...(body ? { body } : {}) });
  return `mailto:${brand.email}?${params.toString()}`;
}
