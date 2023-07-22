import knownTech, { KnownTechLabel } from "./knownTech";

import "./TechLabel.scss";

interface TechLabelProps {
  tech: KnownTechLabel;
}

function TechLabel({ tech }: TechLabelProps) {
  const { displayName, iconUrl, siteUrl } = knownTech[tech];
  return (
    <a className="tech-label" href={siteUrl}>
      <img className="tech-label__icon" src={iconUrl} />
      <div className="tech-label__text">{displayName}</div>
    </a>
  );
}

export default TechLabel;
