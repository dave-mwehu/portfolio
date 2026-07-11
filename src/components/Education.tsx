import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Formation" title="Parcours academique">
      <div className="timeline">
        <article>
          <span>Parcours principal</span>
          <h3>Genie logiciel</h3>
          <p>
            Formation orientee conception logicielle, developpement d'applications, bases de donnees, architecture et
            projets academiques.
          </p>
        </article>
        <article>
          <span>Ouverture technique</span>
          <h3>Electromecanique</h3>
          <p>
            Base technique utile pour comprendre les systemes physiques, les capteurs, les actionneurs et les besoins des
            projets embarques ou IoT.
          </p>
        </article>
      </div>
    </Section>
  );
}
