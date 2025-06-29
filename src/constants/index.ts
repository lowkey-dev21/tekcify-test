interface NavlinksI {
  name: string;
  href: string;
  icon?: string;
}

const navLinks: NavlinksI[] = [
  {
    name: "Products",
    href: "https://tekcify.com/products",
  },
  {
    name: "About",
    href: "https://tekcify.com/about",
  },
  {
    name: "Privacy",
    href: "https://tekcify.com/privacy",
  },
];

export { navLinks };
export type { NavlinksI };
