import { skillGroups } from "../data/profile";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Compétences"
      title="Un socle technique organisé par usage."
      intro="Des technologies choisies pour construire des interfaces, orchestrer les données et connecter le logiciel au monde physique."
    >
      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.category}>
            <div className="skill-card-heading">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{group.category}</h3>
            </div>
            <p>{group.description}</p>
            <ul aria-label={`Technologies : ${group.category}`}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
