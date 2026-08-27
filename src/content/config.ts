import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('BBK Marketing Solutions'),
    category: z.enum([
      'Clinical Research Marketing',
      'Patient Recruitment',
      'Business Growth',
      'Industry Insights',
    ]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    // Real pixel dimensions of heroImage — set per post to avoid layout
    // shift and let it render at its true aspect ratio (these images are
    // dense infographics; cropping to a forced ratio cuts off text).
    heroImageWidth: z.number().default(1200),
    heroImageHeight: z.number().default(630),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
