import LinkedInIcon from "../../assets/LinkedIn-Icon.svg";
import GitHubIcon from "../../assets/GitHub-Icon.svg";
import StackOverflowIcon from "../../assets/StackOverflow-Icon.svg";

type KnownProfileMetadata = {
  siteUrl: string;
  iconUrl: string;
  displayName: string;
};

const knownProfiles = {
  linkedIn: {
    displayName: "LinkedIn",
    siteUrl: "https://uk.linkedin.com/in/kieron-brown",
    iconUrl: LinkedInIcon,
  },
  github: {
    displayName: "GitHub",
    siteUrl: "https://github.com/devklick",
    iconUrl: GitHubIcon,
  },
  stackOverflow: {
    displayName: "Stack Overflow",
    siteUrl: "https://stackoverflow.com/users/6236042/devklick",
    iconUrl: StackOverflowIcon,
  },
} satisfies Record<string, KnownProfileMetadata>;

export type KnownProfileLabel = keyof typeof knownProfiles;

export default knownProfiles;
