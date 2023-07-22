import TechLabel, { KnownTechLabel } from "../TechLabel";
import "./JobCard.scss";

export interface JobCardProps {
  title: string;
  company: string;
  from: Date;
  to?: Date;
  description: Array<string>;
  tech: Array<KnownTechLabel>;
}

function formatDate(date?: Date) {
  if (!date) return "Present";
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  return `${month} ${year}`;
}

// eslint-disable-next-line no-empty-pattern
function JobCard({
  title,
  from,
  to,
  description,
  company,
  tech,
}: JobCardProps) {
  return (
    <div className="job">
      <div className="job__title">
        <span className="job__title-text">{title}</span>
      </div>
      <div className="job__company">
        <span className="job__company-text">{company}</span>
      </div>
      <div className="job__dates">
        <div className="job__dates-from">
          <span className="job__dates-from-text">{formatDate(from)}</span>
        </div>
        <span className="job__dates-separator">{">"}</span>
        <div className="job__dates-to">
          <span className="job__dates-to-text">{formatDate(to)}</span>
        </div>
      </div>
      <div className="job__description">
        {description.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </div>
      <div className="job__tech">
        {tech.map((t) => (
          <TechLabel tech={t} key={t} />
        ))}
      </div>
    </div>
  );
}

export default JobCard;
