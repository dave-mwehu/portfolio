import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="A propos" title="Un profil logiciel ouvert au terrain">
      <div className="text-block">
        <p>
          David Mwehu Munde suit un parcours en genie logiciel avec une sensibilite forte pour les applications concretes :
          outils de gestion, interfaces mobiles, prototypes connectes et systemes qui dialoguent avec le monde physique.
        </p>
        <p>
          Son profil relie le developpement full-stack, le mobile, les systemes embarques, l'IoT et une culture
          electromecanique. Cette combinaison l'amene a concevoir des solutions numeriques sobres, utiles et adaptees a
          des besoins reels.
        </p>
      </div>
    </Section>
  );
}
