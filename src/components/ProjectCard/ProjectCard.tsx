import TechLabel, { KnownTechLabel } from "../TechLabel";
import "./ProjectCard.scss";

interface ProjectCardProps {
  name: string;
  description: Array<string>;
  repo: string;
  site?: {
    url: string;
    status?: "WIP";
  };
  tech: Array<KnownTechLabel>;
}

// eslint-disable-next-line no-empty-pattern
function ProjectCard({
  description,
  name,
  repo,
  site,
  tech,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card__project-name">
        <span className="project-card__project-name-text">{name}</span>
      </div>
      <div className="project-card__tech">
        {tech.map((t) => (
          <TechLabel tech={t} key={t} />
        ))}
      </div>
      <div className="project-card__project-description">
        <span className="project-card__project-description-text">
          {description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </span>
      </div>
      <div className="project-card__project-links">
        <a className="project-card__project-link" href={repo}>
          <span className="project-card__project-link-text">Repo</span>
        </a>
        {site && (
          <a className="project-card__project-link" href={site.url}>
            <span className="project-card__project-link-text">{`Site${
              site.status ? ` (${site.status})` : ""
            }`}</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
