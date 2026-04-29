import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
    // works: defineCollection({
    //     loader: glob({ base: './src/works', pattern: '**/*.{md,mdx}' }),
    //     schema: z.object({
    //         title: z.string(),
    //         tags: z.array(z.string()),
    //         summary: z.array(z.string()).length(2),
    //     }),
    // })
};