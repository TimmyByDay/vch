import { getCollection, type CollectionEntry } from "astro:content";
import type { DeliveryName } from "./delivery";

export function findBusiness(
  entries: CollectionEntry<"business">[],
  name: string,
): string | undefined {
  return entries.find((e) => e.data.name === name)?.data.value;
}

export async function getBusinessEntries() {
  return await getCollection("business");
}

export interface DeliveryLink {
  name: DeliveryName;
  url: string;
  color: string;
}

export function toDeliveryLinks(
  entries: CollectionEntry<"delivery">[],
): DeliveryLink[] {
  return entries
    .sort((a, b) => a.data.order - b.data.order)
    .map((e) => ({
      name: e.data.provider,
      url: e.data.url,
      color: e.data.color,
    }));
}
