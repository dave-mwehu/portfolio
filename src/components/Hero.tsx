import { profile, socialLinks } from "../data/profile";
import { ArrowUpRightIcon, DownloadIcon } from "./Icons";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-kicker">
          <span aria-hidden="true" />
          {profile.title}
        </p>
        <h1 id="hero-title">
          David Mwehu <span>Munde.</span>
        </h1>
        <p className="hero-statement">{profile.statement}</p>
        <p className="hero-subtitle">{profile.subtitle}</p>
        <div className="hero-actions" aria-label="Actions principales">
          <a className="button primary" href="#projects">
            Explorer mes projets
            <ArrowUpRightIcon />
          </a>
          {profile.cvUrl ? (
            <a className="button secondary" href={profile.cvUrl} target="_blank" rel="noreferrer">
              Consulter mon CV
              <DownloadIcon />
            </a>
          ) : null}
        </div>
        <div className="hero-links" aria-label="Liens professionnels">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {link.label}
              <ArrowUpRightIcon />
            </a>
          ))}
        </div>
        <dl className="hero-proof" aria-label="Aperçu du profil">
          <div>
            <dt>04</dt>
            <dd>projets documentés</dd>
          </div>
          <div>
            <dt>Mobile</dt>
            <dd>Android natif</dd>
          </div>
          <div>
            <dt>Systems</dt>
            <dd>Embarqué & IoT</dd>
          </div>
        </dl>
      </div>
      <figure className="hero-visual">
        <div className="portrait-window">
          <div className="window-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p>profile / david-mwehu.jpg</p>
          </div>
          <img
            src="/david-mwehu-portrait.jpg"
            alt="Portrait de David Mwehu Munde"
            width="800"
            height="1200"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>
            <span>Approche</span>
            <strong>Du besoin terrain à une solution logicielle claire.</strong>
          </figcaption>
        </div>
        <div className="hero-visual-note" aria-hidden="true">
          <span>01</span>
          <p>Mobile · Backend · Embedded · IoT</p>
        </div>
      </figure>
    </section>
  );
}
