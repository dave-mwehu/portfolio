import { Section } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      index="04"
      eyebrow="Parcours"
      title="Un parcours ancré dans le génie logiciel."
      intro="Le génie logiciel structure ma manière de concevoir. Les projets connectés complètent ce parcours par une expérience concrète des échanges entre logiciel, données et matériel."
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
            <span>Projets appliqués</span>
            <h3>Systèmes embarqués &amp; IoT</h3>
            <p>
              Expérience acquise à travers un prototype de supervision : maquette Arduino, MQTT, API FastAPI,
              dashboard temps réel et scénarios de délestage.
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
