import { profile, socialLinks } from "../data/profile";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Portfolio developpeur</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-subtitle">{profile.subtitle}</p>
        <div className="hero-actions" aria-label="Actions principales">
          <a className="button primary" href="#projects">
            Voir les projets
          </a>
          <a className="button secondary" href={profile.cvUrl}>
            CV temporaire
          </a>
        </div>
        <div className="hero-links" aria-label="Liens professionnels temporaires">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {link.label}
              {link.isPlaceholder ? <span>placeholder</span> : null}
            </a>
          ))}
        </div>
      </div>
      <aside className="hero-panel" aria-label="Resume professionnel">
        <p>Orientation</p>
        <strong>Logiciel utile, mobile, embarque et IoT.</strong>
        <span>Des projets concrets, documentes et construits avec des bases maintenables.</span>
      </aside>
    </section>
  );
}
