import { useEffect, useState } from "react";
import type { Theme } from "../types";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";

const navItems = [
  { index: "01", label: "À propos", href: "#about" },
  { index: "02", label: "Compétences", href: "#skills" },
  { index: "03", label: "Projets", href: "#projects" },
  { index: "04", label: "Parcours", href: "#education" },
  { index: "05", label: "Contact", href: "#contact" },
];

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Retour en haut de page">
        <span className="brand-mark">DM</span>
        <span className="brand-name">David Mwehu</span>
      </a>
      <nav className={`site-nav${menuOpen ? " is-open" : ""}`} id="primary-navigation" aria-label="Navigation principale">
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>{item.index}</span>
              {item.label}
            </a>
          ))}
        </div>
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Changer le thème">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          <span>{theme === "dark" ? "Clair" : "Sombre"}</span>
        </button>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  );
}
