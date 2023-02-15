import { z } from 'astro:content'

const postSchema = {
    type: z.string(),
    title: z.string(),
    publishedAt: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    link: z.string().optional(),
    demo: z.string().optional(),
    repo: z.string(),
    nofollow: z.boolean().default(false),
    noindex: z.boolean().default(false),
    draft: z.boolean().default(false),
};

export default z.object(postSchema);