import { socialLinks } from "../data/profile";
import { LinkedInProfileBadge } from "./LinkedInProfileBadge";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Discuter d'un projet ou d'une opportunite">
      <div className="contact-layout">
        <div className="text-block">
          <p>
            Disponible pour echanger autour de projets logiciels, d'applications mobiles, de prototypes connectes et
            d'opportunites de collaboration.
          </p>
          <div className="contact-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <aside className="contact-note linkedin-profile-card" aria-label="Profil LinkedIn">
          <h3>Profil LinkedIn</h3>
          <p>Retrouvez mon parcours, mes competences et mes prochaines actualites professionnelles.</p>
          <LinkedInProfileBadge />
        </aside>
      </div>
    </Section>
  );
}
