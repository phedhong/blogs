import { defineCollection, reference, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blogs = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      permalink: z.string().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogimage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
    }),
});

export const collections = { blogs };
