import { z, defineCollection } from "astro:content";

const drinksCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    category: z.enum([
      "coffee", "specialty-coffee", "tea", "hot-chocolate",
      "cold-drinks", "smoothies", "soft-drinks", "other",
    ]),
    description: z.string(),
    price: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    vegan: z.boolean().default(false),
    special: z.boolean().default(false),
    specialPrice: z.string().optional(),
    label: z.enum(["", "New", "Seasonal", "Limited"]).default(""),
  }),
});

const foodCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    category: z.enum([
      "panini", "baguette", "jacket-potato", "toasties",
      "sandwiches", "wraps", "soups", "breakfast", "sides", "other",
    ]),
    description: z.string(),
    price: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    vegan: z.boolean().default(false),
    special: z.boolean().default(false),
    specialPrice: z.string().optional(),
    label: z.enum(["", "New", "Seasonal", "Limited"]).default(""),
  }),
});

const cakesCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    price: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    vegan: z.boolean().default(false),
    special: z.boolean().default(false),
    specialPrice: z.string().optional(),
    label: z.enum(["", "New", "Seasonal", "Limited"]).default(""),
  }),
});

const businessCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    value: z.string(),
  }),
});

const deliveryCollection = defineCollection({
  type: "data",
  schema: z.object({
    provider: z.enum(["Deliveroo", "Uber Eats", "Just Eat"]),
    url: z.string(),
    color: z.string(),
    order: z.number().default(0),
  }),
});

const testimonialsCollection = defineCollection({
  type: "data",
  schema: z.object({
    quote: z.string(),
    author: z.string(),
  }),
});

export const collections = {
  drinks: drinksCollection,
  food: foodCollection,
  cakes: cakesCollection,
  business: businessCollection,
  delivery: deliveryCollection,
  testimonials: testimonialsCollection,
};
