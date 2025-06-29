import type { Product } from "@/types/app";

export const products: Product[] = [
  {
    name: "Binx AI",
    desc: "WhatsApp AI assistant for for daily tasks.",
    image: "/assets/products/binx-logo.webp",
    href: "https://wa.me/message/KFPN4EP6KHL3E1",
    chevronBg: "group-hover:bg-[#8B5CF6]",
  },
  {
    name: "PDFX",
    desc: "AI-powered document analysis and extraction",
    image: "/assets/products/pdfx-logo.webp",
    href: "https://pdfx.chat",
    chevronBg: "group-hover:bg-[#059669]",
  },
  {
    name: "Campux",
    desc: "Smart social platform for students",
    image: "/assets/products/campux-logo.webp",
    href: "/products",
    chevronBg: "group-hover:bg-[#7C3AED]",
  },
];
