import { getCollection, type CollectionEntry } from 'astro:content';

/** Published posts, newest first. Drafts show up in `npm run dev` only. */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
