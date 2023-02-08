import { z, defineCollection } from 'astro:content'

const defaultSchema = {
    type: z.string(),
    title: z.string(),
    // publishedAt: z.string().transform(str => new Date(str)),
    publishedAt: z.date(),
    excerpt: z.string(),
    // tags: z.string().optional(),
    tags: z.array(z.string()).optional(),
    link: z.string().optional(),
    nofollow: z.boolean().default(false),
    noindex: z.boolean().default(false),
    draft: z.boolean().default(false),
};

export const collections = {
    'posts': defineCollection({schema: z.object(defaultSchema)}),
    'projects': defineCollection({schema: z.object(defaultSchema)}),
    'links': defineCollection({schema: z.object(defaultSchema)}),
}