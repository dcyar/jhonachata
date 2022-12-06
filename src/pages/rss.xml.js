import rss from '@astrojs/rss';

const allPosts = import.meta.glob('../posts/**/*.{md,mdx}', { eager: true });
let posts = Object.values(allPosts);

posts = posts
    .filter(({ frontmatter }) => !frontmatter.draft)
    .sort((a, b) => {
        return (
            new Date(b.frontmatter.publishedAt).getTime() -
            new Date(a.frontmatter.publishedAt).getTime()
        );
    })
    .map(({ frontmatter }) => ({
        link: frontmatter.slug,
        title: frontmatter.title,
        pubDate: frontmatter.publishedAt,
    }));

export const get = () =>
    rss({
        title: 'Jhon Achata',
        description:
            'Fullstack Developer con más de 3 años de experiencia, orientado a las buenas prácticas y al código limpio.',
        site: import.meta.env.PUBLIC_APP_URL,
        items: posts,
        customData: `<language>es-PE</language>`,
    });
