import type { Product } from "./ProductCard";

export const products: Product[] = [
  {
    name: "Premium CTC",
    tagline: "The Bold Ritual",
    description:
      "A robust Assam blend, crafted for the ceremony of the morning cup. Malty, full-bodied, unmistakably awake.",
    image: "/images/red-pack.jpg",
    notes: ["Bold", "Malty", "Morning"],
  },
  {
    name: "House Blend",
    tagline: "The Quiet Companion",
    description:
      "An elegantly balanced composition of high-grown leaves. Smooth, aromatic, and gently rounded — for the unhurried hour.",
    image: "/images/gold-pack.jpg",
    notes: ["Smooth", "Aromatic", "Afternoon"],
  },
];
