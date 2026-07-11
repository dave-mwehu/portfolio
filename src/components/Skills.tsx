import { skillGroups } from "../data/profile";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Competences" title="Technologies par domaine">
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
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
