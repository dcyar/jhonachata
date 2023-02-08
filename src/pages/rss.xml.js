import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const get = async (context) => {
    const posts = [
        ...await getCollection('posts', ({data}) => !data.draft),
        ...await getCollection('projects', ({data}) => !data.draft),
        ...await getCollection('links', ({data}) => !data.draft),
    ].map(entry => ({
        title: entry.data.title,
        pubDate: entry.data.publishedAt,
        link: entry.slug,
        description: entry.data.excerpt,
    }));

    return rss({
        title: 'Jhon Achata Blog',
        description:
            'Fullstack Developer con más de 3 años de experiencia, orientado a las buenas prácticas y al código limpio.',
        site: context.site,
        items: posts,
        customData: `<language>es-PE</language>`,
    });
}
