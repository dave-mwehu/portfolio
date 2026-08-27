import { projects } from "../data/projects";
import { ArrowUpRightIcon } from "./Icons";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projets sélectionnés"
      title="Des problèmes concrets, des systèmes qui fonctionnent."
      intro="Chaque projet met en évidence une contrainte différente : mobilité, fonctionnement hors ligne, temps réel ou structuration des données."
    >
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <div className="project-visual" aria-label={`Architecture simplifiée du projet ${project.name}`}>
              <div className="project-visual-head">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{project.category}</p>
              </div>
              <div className="project-flow">
                {project.flow.map((step, flowIndex) => (
                  <div key={step}>
                    <span>{step}</span>
                    {flowIndex < project.flow.length - 1 ? <i aria-hidden="true">→</i> : null}
                  </div>
                ))}
              </div>
            </div>
            <div className="project-content">
              <div className="project-overview">
                <h3>{project.name}</h3>
                <div className="project-narrative">
                  <p className="project-label">Problème</p>
                  <p className="project-problem">{project.problem}</p>
                </div>
                <div className="project-narrative">
                  <p className="project-label">Solution</p>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-role">
                  <span>Contribution</span>
                  <p>{project.role}</p>
                </div>
              </div>
              <div className="project-details">
                <div>
                  <h4>Technologies</h4>
                  <div className="tech-list" aria-label={`Technologies utilisées pour ${project.name}`}>
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4>Fonctionnalités principales</h4>
                  <ul className="feature-list">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    Voir le code sur GitHub
                    <ArrowUpRightIcon />
                  </a>
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      Voir la démo
                      <ArrowUpRightIcon />
                    </a>
                  ) : (
                    <span>Démo publique non disponible</span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
