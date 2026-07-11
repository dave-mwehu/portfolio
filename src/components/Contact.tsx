import { socialLinks } from "../data/profile";
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
        <aside className="contact-note" aria-label="Contact direct">
          <h3>Contact direct</h3>
          <p>Les echanges se font pour cette premiere version via les liens professionnels affiches.</p>
        </aside>
      </div>
    </Section>
  );
}
