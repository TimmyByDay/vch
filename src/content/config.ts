import { z, defineCollection } from "astro:content";

const drinksCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      category: z.enum([
        "coffee", "specialty-coffee", "tea", "hot-chocolate",
        "cold-drinks", "smoothies", "soft-drinks", "other",
      ]),
      description: z.string(),
      price: z.string().optional(),
      image: image().optional(),
      featured: z.boolean().default(false),
    }),
});

const foodCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      category: z.enum([
        "panini", "baguette", "jacket-potato", "toasties",
        "sandwiches", "wraps", "soups", "breakfast", "sides", "other",
      ]),
      description: z.string(),
      price: z.string().optional(),
      image: image().optional(),
      featured: z.boolean().default(false),
    }),
});

const cakesCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      price: z.string().optional(),
      image: image().optional(),
      featured: z.boolean().default(false),
    }),
});

const specialsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      startDate: z.date(),
      endDate: z.date().optional(),
    }),
});

const businessCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    value: z.string(),
  }),
});

export const collections = {
  drinks: drinksCollection,
  food: foodCollection,
  cakes: cakesCollection,
  specials: specialsCollection,
  business: businessCollection,
};
