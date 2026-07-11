import type { Theme } from "../types";

const navItems = [
  { label: "A propos", href: "#about" },
  { label: "Competences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Formation", href: "#education" },
  { label: "Contact", href: "#contact" },
];

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Retour en haut de page">
        DM
      </a>
      <nav className="site-nav" aria-label="Navigation principale">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Changer le theme">
        {theme === "dark" ? "Clair" : "Sombre"}
      </button>
    </header>
  );
}
