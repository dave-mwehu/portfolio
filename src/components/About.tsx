import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="À propos"
      title="Construire là où le logiciel rencontre le réel."
      intro="Mon point de départ n'est pas une technologie : c'est un problème concret à comprendre, structurer et résoudre."
    >
      <div className="about-layout">
        <div className="about-statement">
          <p>
            Mes projets de supervision IoT et de prototypes connectés m'ont appris à relier logiciel, données et
            contraintes d'un système physique, sans perdre de vue l'usage final.
          </p>
          <p>
            J'aborde ainsi une application de gestion, un éditeur hors ligne ou un prototype connecté avec le même
            objectif : produire une solution utile, lisible et maintenable.
          </p>
        </div>
        <div className="principle-list" aria-label="Principes de travail">
          <article>
            <span>01 / Comprendre</span>
            <h3>Partir du besoin</h3>
            <p>Clarifier le contexte et les contraintes avant de choisir les outils.</p>
          </article>
          <article>
            <span>02 / Concevoir</span>
            <h3>Relier les couches</h3>
            <p>Faire dialoguer interface, logique métier, données et systèmes physiques.</p>
          </article>
          <article>
            <span>03 / Livrer</span>
            <h3>Rester pragmatique</h3>
            <p>Préférer une base claire et évolutive à une complexité sans bénéfice réel.</p>
          </article>
        </div>
      </div>
    </Section>
  );
}
