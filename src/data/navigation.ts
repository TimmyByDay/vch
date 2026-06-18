export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/specials", label: "Specials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const headerLinks = navLinks.filter((l) => l.href !== "/");
