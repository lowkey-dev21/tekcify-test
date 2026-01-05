interface NavlinksI {
  name: string;
  href: string;
  icon?: string;
}

const navLinks: NavlinksI[] = [
  {
    name: "Products",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Privacy",
    href: "#",
  },
];

export { navLinks };
export type { NavlinksI };
