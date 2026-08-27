import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, index, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <div className="section-kicker">
          <span>{index}</span>
          {eyebrow ? <p>{eyebrow}</p> : null}
        </div>
        <div className="section-heading-copy">
          <h2 id={`${id}-title`}>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}
