import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog posts live in src/content/blog/*.md — one Markdown file per post.
 * The filename becomes the URL: `launching-the-beta.md` → /blog/launching-the-beta
 *
 * Required frontmatter:
 *   title, description, pubDate
 * Optional:
 *   category, author, heroImage, draft
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(80),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('Update'),
    author: z.string().default('[Your Name]'),
    /** Path inside /public, e.g. '/images/blog/beta.png' */
    heroImage: z.string().optional(),
    /** Drafts are excluded from the production build. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
