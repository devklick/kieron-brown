import "./ProfileLabel.scss";
import knownProfiles, { KnownProfileLabel } from "./knownProfiles";

interface LabelProps {
  profile: KnownProfileLabel;
}

function ProfileLabel({ profile }: LabelProps) {
  const { displayName, iconUrl, siteUrl } = knownProfiles[profile];
  return (
    <a className="label" href={siteUrl}>
      <img className="label__icon" src={iconUrl} />
      <div className="label__text">{displayName}</div>
    </a>
  );
}

export default ProfileLabel;
