import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Les deux contenus que le club met à jour lui-même depuis /admin.

const actualites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actualites' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      image: image().optional(),
    }),
});

const competitions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/competitions' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.string().default('Compétition ouverte'),
    infos: z.string().optional(),
  }),
});

export const collections = { actualites, competitions };
