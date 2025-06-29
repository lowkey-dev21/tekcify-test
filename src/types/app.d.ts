// Types for FAQ
export interface FAQ {
  q: string;
  a: string;
}

// Types for Product
export interface Product {
  name: string;
  desc: string;
  image: string;
  href: string;
  chevronBg: string;
}

// Types for Story
export interface Story {
  image: string;
  alt: string;
  quote: string;
  author: string;
  description: string;
  features: string[];
}

// Types for Testimonial
export interface Testimonial {
  name: string;
  username: string;
  avatar: string;
  text: string;
  icons: string[];
}

// Types for World Stat
export interface WorldStat {
  value: string;
  label: string;
  desc: string;
  suffix?: string;
}
