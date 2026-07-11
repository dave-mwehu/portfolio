import { profile, socialLinks } from "../data/profile";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Discuter d'un projet ou d'une opportunite">
      <div className="contact-layout">
        <div className="text-block">
          <p>
            Les liens ci-dessous utilisent encore certaines valeurs temporaires. Ils sont regroupes dans un fichier de
            donnees pour pouvoir les remplacer facilement avant publication finale.
          </p>
          <div className="contact-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <form className="contact-form" action={`mailto:${profile.email}`} method="post" encType="text/plain">
          <label>
            Nom
            <input type="text" name="name" autoComplete="name" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} />
          </label>
          <button className="button primary" type="submit">
            Ouvrir l'e-mail
          </button>
          <p>Formulaire facultatif, sans backend ni stockage de donnees.</p>
        </form>
      </div>
    </Section>
  );
}
