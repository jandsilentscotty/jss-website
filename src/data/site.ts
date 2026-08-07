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
  appName: 'RepBud',
  /** Six words max. Sits under the logo in the footer. */
  tagline: 'Say the set. It is logged.',
  /** Used for the copyright line and legal pages. */
  legalName: 'RepBud',
  email: 'jandsilentscotty@gmail.com',
} as const;

/* ─── 2. SEO DEFAULTS ───────────────────────────────────────────────────── */

export const seo = {
  /** ~55 chars. Shown in the browser tab and as the Google result headline. */
  defaultTitle: `${brand.appName} — Log every set by voice`,
  /** 150–160 chars. This is your Google search snippet. Make it a sales line. */
  defaultDescription:
    'RepBud is the iPhone and Apple Watch training log you can talk to. Say “185 for 8” between sets and it is logged — on device, no typing, no phone juggling.',
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
  { label: 'Voice', href: '/#voice' },
  { label: 'Videos', href: '/#youtube' },
  { label: 'About', href: '/#about' },
] as const;

/* ─── 5. HERO ───────────────────────────────────────────────────────────── */

export const hero = {
  /** Small pill above the headline. Great spot for launch status. */
  eyebrow: 'Coming to the App Store',
  /** ONE sentence. What it is, who it's for. Not a slogan — a statement. */
  headline: 'Say the set. RepBud logs it.',
  /** 1–2 sentences. Name the person and the problem you remove. */
  subhead:
    'RepBud is a strength training log for iPhone and Apple Watch. Say “185 for 8” between sets and it lands on the right exercise — weight, reps, time or distance, all transcribed on your device.',
  /** Small reassurance line under the buttons. */
  ctaNote: 'iPhone + Apple Watch · Free to start · RepBud Pro unlocks the deep analytics',
  /** Hero screenshots. Empty string → labelled placeholder frame. */
  phoneScreenshot: '/images/screenshots/ios-home.png',
  watchScreenshot: '/images/screenshots/watch-active-set.png',
} as const;

/* ─── 6. POSITIONING — who it's for, what it fixes ──────────────────────── */

export const positioning = {
  heading: 'Made for one person in particular',
  subheading:
    'Not a habit tracker. Not a social network. A training log for people who actually train.',
  audience: [
    {
      title: 'You hate typing between sets',
      body: 'Tap the mic, say the set, put the phone down. RepBud understands your workout details, converts measurements when needed, and lets you quickly undo a mistake if it hears you incorrectly.',
    },
    {
      title: 'You lift 3–6 days a week',
      body: 'Save your split as routines, then start one in a tap. The session runs full screen with a rest timer, and minimises to a card when you need the rest of your phone.',
    },
    {
      title: 'You want proof it is working',
      body: 'Volume, frequency, progression, muscle split, duration, streaks and personal records are charted from the sets you already logged. No spreadsheet, no export ritual.',
    },
  ],
} as const;

/* ─── 7. PRODUCT — the two apps ─────────────────────────────────────────── */

export const products = [
  {
    id: 'ios',
    kicker: 'iPhone',
    title: 'Log the session. Then see what changed.',
    body: 'The iPhone app guides your workout and saves every set. You can search your history by month and view your progress in seven charts.',
    device: 'iphone' as const,
    /** Up to 3 — they become the phone frames in this block. */
    screenshots: [
      { src: '/images/screenshots/ios-active-workout.png', label: '[Screenshot: Active workout]' },
      { src: '/images/screenshots/ios-analytics.png', label: '[Screenshot: Training charts]' },
      { src: '/images/screenshots/ios-logs.png', label: '[Screenshot: Workout log]' },
    ],
    features: [
      'Voice, or type — strength, bodyweight, timed and cardio sets',
      'Reusable routines, a rest timer and a session you can minimise',
      'Every workout kept in a searchable, month-grouped log',
      'Hall of Fame for your heaviest weight, most reps and best volume',
      'Apple Health sync, Siri Shortcuts and CSV export',
    ],
  },
  {
    id: 'watch',
    kicker: 'Apple Watch',
    title: 'The whole session, from your wrist.',
    body: 'The Watch app tracks the workout natively, with no phone needed on the gym floor — and it does not care whether you have signal.',
    device: 'watch' as const,
    screenshots: [
      { src: '/images/screenshots/watch-active-set.png', label: '[Screenshot: Watch — active set]' },
      { src: '/images/screenshots/watch-voice.png', label: '[Screenshot: Watch — voice logging]' },
      { src: '/images/screenshots/watch-rest-timer.png', label: '[Screenshot: Watch — rest timer]' },
    ],
    features: [
      'Native watchOS workout tracking, not a mirrored screen',
      'Say the set from your wrist — the phone can stay in your bag',
      'A rest timer you start and pause without looking for your phone',
      'Sets queue up offline and sync themselves when you are back',
      'Your log stays identical on both devices',
    ],
  },
] as const;

/* ─── 7b. VOICE LOGGING — the headline feature ──────────────────────────── */

export const voice = {
  heading: 'Say the set. Keep your hands on the bar.',
  subheading:
    'Tap the mic on any exercise and talk to RepBud the way you would talk to a training partner. Speech is transcribed on your device — nothing is shipped off to a server to be understood.',
  /** Real phrasings the parser understands. */
  phrases: [
    { said: '“185 for 8”', logged: '185 lbs × 8 reps' },
    { said: '“forty five seconds”', logged: '0:45 on a timed set' },
  ],
  /** `icon` is an Icon name — see src/components/Icon.astro. */
  points: [
    {
      icon: 'undo',
      title: 'It is undoable',
      body: 'Every dictated set arrives with an undo toast. Misheard numbers are one tap away from gone.',
    },
  ],
  screenshot: '/images/screenshots/ios-active-workout.png',
} as const;

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

/* ─── 9. ABOUT ──────────────────────────────────────────────────────────── */

export const about = {
  heading: 'Why I built this',
  name: 'J',
  role: 'One half of J & Silent Scotty',
  photo: '/images/portrait.jpg',
  /** Each string is its own paragraph. */
  paragraphs: [
    'I’m J. One half of J and Silent Scotty, where motivation meets the journey. We create engaging workout vlogs to inspire you to chase your next personal best, whether you’re training in the gym, working out at home, or just getting started.',
    'Along the way, we openly share our fitness plans, training routines, evolving goals, and the everyday work behind getting stronger. We built RepBud to make that journey easier to track.',
    'Logging a workout should not interrupt it. RepBud lets you record a set quickly by voice, so you can stay focused and keep moving instead of stopping to type everything into a spreadsheet or search through a complicated app. Its simple statistics also help you see your progress, recognize your growth, and stay motivated toward your next goal.',
    'RepBud is built by one person who uses it every session. That keeps it focused, fast, and practical. Every feature has to earn its place by making training easier to log and progress easier to understand.',
    'We believe fitness is a journey best taken together. When we’re not lifting, you can find us unwinding with some chill gaming content, but wherever we are, RepBud helps us keep showing up, tracking the work, and moving forward.',
  ],
  /** Short credibility bullets. Keep them concrete. */
  facts: ['100 subscribers on YouTube'],
} as const;

/* ─── 10. YOUTUBE ───────────────────────────────────────────────────────── */
/* Get an ID from the watch URL: youtube.com/watch?v=THIS_PART_HERE          */
/* Optional `start` jumps the player to that many seconds in (the &t= value). */

export const youtube = {
  heading: 'Watch the build',
  subheading:
    'Training sessions, gaming nights and the occasional look behind the scenes of building RepBud.',
  channelUrl: 'https://www.youtube.com/@JnSilentScotty?sub_confirmation=1',
  channelHandle: '@JnSilentScotty',
  videos: [
    {
      id: '01s2mGlsuMQ',
      title: 'CYCLE 5 ENDS HERE. | Solo Squat Reset & Form Check (D4W4C5 157/365)',
    },
    {
      id: 'EUoqtxnNJ1Y',
      title: 'EP. 1 WE FINALLY STARTED! | J & SilentScotty Hit the Gym (D1W1C1 Overhead Press 1/365)',
      start: 314,
    },
  ],
} as const;

/* ─── 11. CONTACT ───────────────────────────────────────────────────────── */

export const contact = {
  heading: 'Get in touch',
  subheading:
    'Bug report, feature request, press enquiry or a collab — all of it lands in the same inbox and I read everything.',
  responseTime: 'Usually replies within [2 business days]',
} as const;

/* ─── 12. LEGAL ─────────────────────────────────────────────────────────── */

/* The canonical text lives in the RepBud repo at docs/legal/. Edit it there
   first, then mirror the change into src/pages/privacy.astro + terms.astro and
   bump the date below. */

export const legal = {
  effectiveDate: 'Friday August 7, 2026',
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
