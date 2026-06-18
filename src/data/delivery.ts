import { siDeliveroo, siUbereats, siJusteat } from "simple-icons";
import { withFill } from "./icons";

export type DeliveryName = "Deliveroo" | "Uber Eats" | "Just Eat";

export const deliveryIcons: Record<DeliveryName, string> = {
  Deliveroo: withFill(siDeliveroo.svg),
  "Uber Eats": withFill(siUbereats.svg),
  "Just Eat": withFill(siJusteat.svg),
};
