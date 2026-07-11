import { projects } from "../data/projects";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projets" title="Selection de projets">
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-main">
              <p className="project-problem">{project.problem}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div>
                <h4>Fonctionnalites principales</h4>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Role</h4>
                <p>{project.role}</p>
              </div>
            </div>
            <div className="project-side">
              <div className="screenshot-slot" aria-hidden="true">
                <span>{project.name.slice(0, 2).toUpperCase()}</span>
              </div>
              <div className="tech-list" aria-label={`Technologies utilisees pour ${project.name}`}>
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                ) : (
                  <span>Demo non disponible</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
