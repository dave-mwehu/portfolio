import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      index="04"
      eyebrow="Parcours"
      title="Une formation qui relie logiciel et systèmes."
      intro="Le génie logiciel structure ma manière de concevoir. L'électromécanique m'aide à comprendre le contexte physique dans lequel certains produits doivent fonctionner."
    >
      <div className="journey-layout">
        <div className="timeline">
          <article>
            <div className="timeline-marker" aria-hidden="true" />
            <span>Formation principale</span>
            <h3>Génie logiciel</h3>
            <p>
              Conception logicielle, développement d'applications, bases de données, architecture et projets académiques.
            </p>
          </article>
          <article>
            <div className="timeline-marker" aria-hidden="true" />
            <span>Socle technique complémentaire</span>
            <h3>Électromécanique</h3>
            <p>
              Une base pour comprendre les systèmes physiques, les capteurs, les actionneurs et les contraintes des
              projets embarqués ou IoT.
            </p>
          </article>
        </div>
        <aside className="journey-note">
          <p className="project-label">Le fil rouge</p>
          <blockquote>Comprendre suffisamment le système complet pour prendre de meilleures décisions logicielles.</blockquote>
          <div className="bridge-diagram" aria-label="Lien entre logiciel et systèmes physiques">
            <span>Software</span>
            <i aria-hidden="true">↔</i>
            <span>Physical systems</span>
          </div>
        </aside>
      </div>
    </Section>
  );
}
