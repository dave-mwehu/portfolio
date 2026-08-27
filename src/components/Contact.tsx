import { socialLinks } from "../data/profile";
import { ArrowUpRightIcon } from "./Icons";
import { LinkedInProfileBadge } from "./LinkedInProfileBadge";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      eyebrow="Contact"
      title="Construisons quelque chose d'utile."
      intro="Un projet logiciel, une opportunité de collaboration ou simplement une conversation technique : mes profils professionnels sont le meilleur point de départ."
    >
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="contact-lead">Vous avez un problème concret à structurer ou un produit à faire avancer&nbsp;?</p>
          <p>
            Je serais ravi d'échanger autour du mobile, du backend, des systèmes embarqués et des prototypes connectés.
          </p>
          <div className="contact-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {link.label}
                <ArrowUpRightIcon />
              </a>
            ))}
          </div>
        </div>
        <aside className="contact-note linkedin-profile-card" aria-label="Profil LinkedIn">
          <div className="linkedin-card-heading">
            <span>Profil professionnel</span>
            <h3>Retrouvez-moi sur LinkedIn</h3>
            <p>Parcours, compétences et prochaines actualités professionnelles.</p>
          </div>
          <LinkedInProfileBadge />
        </aside>
      </div>
    </Section>
  );
}
