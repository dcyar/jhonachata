import { defineCollection } from 'astro:content'
import postSchema from '../schemas/post';
import projectSchema from '../schemas/project';

export const collections = {
    'posts': defineCollection({schema: postSchema}),
    'projects': defineCollection({schema: projectSchema}),
    'links': defineCollection({schema: postSchema}),
}