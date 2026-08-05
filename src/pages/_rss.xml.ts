import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '@utils/posts';
import { brand, seo } from '@data/site';
import { withBase } from '@utils/url';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: `${brand.name} — ${brand.appName}`,
    description: seo.defaultDescription,
    site: context.site ?? 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: withBase(`/blog/${post.id}`),
      categories: [post.data.category],
    })),
    customData: `<language>en-us</language>`,
  });
}
