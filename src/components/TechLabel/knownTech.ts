import ReactIcon from "../../assets/React-icon.svg";
import CraIcon from "../../assets/CRA-icon.svg";
import TSIcon from "../../assets/TS-Icon.svg";
import SassIcon from "../../assets/Sass-Icon.svg";
import GitHubIcon from "../../assets/GitHub-Icon.svg";
import ZustandIcon from "../../assets/Zustand-Icon.ico";
import ElectronIcon from "../../assets/Electron-Icon.svg";
import DotNetIcon from "../../assets/NET-Icon.svg";
import CSharpIcon from "../../assets/CSharp-Icon.svg";
import ViteIcon from "../../assets/Vite-Icon.svg";
import StyledComponentsIcon from "../../assets/StyledComponents-Icon.png";
import StorybookIcon from "../../assets/Storybook-Icon.svg";
import BlazorIcon from "../../assets/Blazor-Icon.svg";
import ConsoleIcon from "../../assets/Console-Icon.png";
import NodeJsIcon from "../../assets/NodeJS-Icon.svg";
import NxIcon from "../../assets/NX-Icon.svg";
import PrismaIcon from "../../assets/Prisma-Icon.svg";
import PostgresIcon from "../../assets/Postgresql-Icon.svg";
import ExpressIcon from "../../assets/Express-Icon.svg";
import ZodIcon from "../../assets/Zod-Icon.svg";
import CrmIcon from "../../assets/Crm-Icon.svg";
import SqlServerIcon from "../../assets/SqlServer-Icon.png";
import PostmanIcon from "../../assets/Postman-Icon.svg";
import SoapUiIcon from "../../assets/SoapUI-Icon.svg";
import IisIcon from "../../assets/IIS-Icon.svg";
import RabbitMQIcon from "../../assets/RabbitMQ-Icon.svg";
import TestRailIcon from "../../assets/TestRail-Icon.png";
import JenkinsIcon from "../../assets/Jenkins-Icon.svg";
import BitbucketIcon from "../../assets/Bitbucket-Icon.svg";
import LambdaIcon from "../../assets/AwsLambda-Icon.svg";
import ApiGatewayIcon from "../../assets/AwsApiGateway-Icon.svg";
import EcsIcon from "../../assets/AwsEcs-Icon.svg";
import RdsIcon from "../../assets/AwsRds-Icon.svg";
import SnsIcon from "../../assets/AwsSns-Icon.svg";
import DynamoDBIcon from "../../assets/AwsDynamoDB-Icon.svg";
import MuiIcon from "../../assets/Mui-Icon.svg";

type KnownTechMetadata = {
  siteUrl: string;
  iconUrl: string;
  displayName: string;
};

const knownTech = {
  react: {
    displayName: "React",
    siteUrl: "https://react.dev/",
    iconUrl: ReactIcon,
  },
  cra: {
    displayName: "CRA",
    siteUrl: "https://create-react-app.dev/",
    iconUrl: CraIcon,
  },
  ts: {
    displayName: "TypeScript",
    siteUrl: "https://www.typescriptlang.org/",
    iconUrl: TSIcon,
  },
  scss: {
    displayName: "SCSS",
    siteUrl: "https://sass-lang.com/",
    iconUrl: SassIcon,
  },
  ghPages: {
    displayName: "GitHub Pages",
    siteUrl: "https://pages.github.com/",
    iconUrl: GitHubIcon,
  },
  zustand: {
    displayName: "Zustand",
    siteUrl: "https://docs.pmnd.rs/zustand/getting-started/introduction",
    iconUrl: ZustandIcon,
  },
  electron: {
    displayName: "Electron",
    siteUrl: "https://www.electronjs.org/",
    iconUrl: ElectronIcon,
  },
  dotnet: {
    displayName: ".NET",
    siteUrl: "https://learn.microsoft.com/en-us/dotnet/",
    iconUrl: DotNetIcon,
  },
  csharp: {
    displayName: "C#",
    siteUrl: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    iconUrl: CSharpIcon,
  },
  vite: {
    displayName: "Vite",
    siteUrl: "https://vitejs.dev/",
    iconUrl: ViteIcon,
  },
  styled: {
    displayName: "Styled Components",
    siteUrl: "https://styled-components.com/",
    iconUrl: StyledComponentsIcon,
  },
  story: {
    displayName: "Storybook",
    siteUrl: "https://storybook.js.org/",
    iconUrl: StorybookIcon,
  },
  blazor: {
    displayName: "Blazor",
    siteUrl: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
    iconUrl: BlazorIcon,
  },
  consoleApp: {
    displayName: "Console App",
    siteUrl:
      "https://learn.microsoft.com/en-us/dotnet/csharp/tutorials/console-teleprompter",
    iconUrl: ConsoleIcon,
  },
  nodeJs: {
    displayName: "NodeJS",
    siteUrl: "https://nodejs.org/en",
    iconUrl: NodeJsIcon,
  },
  nx: {
    displayName: "Nx",
    siteUrl: "https://nx.dev/",
    iconUrl: NxIcon,
  },
  prisma: {
    displayName: "Prisma",
    siteUrl: "https://www.prisma.io/",
    iconUrl: PrismaIcon,
  },
  postgres: {
    displayName: "PostgreSQL",
    siteUrl: "https://www.postgresql.org/",
    iconUrl: PostgresIcon,
  },
  express: {
    displayName: "Express",
    siteUrl: "https://expressjs.com/",
    iconUrl: ExpressIcon,
  },
  zod: {
    displayName: "Zod",
    siteUrl: "https://github.com/colinhacks/zod",
    iconUrl: ZodIcon,
  },
  crm: {
    displayName: "Dynamics CRM",
    siteUrl: "https://dynamics.microsoft.com/en-gb/",
    iconUrl: CrmIcon,
  },
  sqlServer: {
    displayName: "SQL Server",
    siteUrl: "https://www.microsoft.com/en-gb/sql-server/sql-server-downloads",
    iconUrl: SqlServerIcon,
  },
  postman: {
    displayName: "Postman",
    siteUrl: "https://www.postman.com/",
    iconUrl: PostmanIcon,
  },
  soapUi: {
    displayName: "SoapUI",
    siteUrl: "https://www.soapui.org/",
    iconUrl: SoapUiIcon,
  },
  rabbitMq: {
    displayName: "RabbitMQ",
    siteUrl: "https://www.rabbitmq.com/",
    iconUrl: RabbitMQIcon,
  },
  iis: {
    displayName: "IIS",
    siteUrl: "https://www.iis.net/",
    iconUrl: IisIcon,
  },
  testRail: {
    displayName: "TestRail",
    siteUrl: "https://support.testrail.com",
    iconUrl: TestRailIcon,
  },
  jenkins: {
    displayName: "Jenkins",
    siteUrl: "https://www.jenkins.io/",
    iconUrl: JenkinsIcon,
  },
  bitbucketPipelines: {
    displayName: "Bitbucket Pipelines",
    siteUrl: "https://bitbucket.org/product/features/pipelines",
    iconUrl: BitbucketIcon,
  },
  lambda: {
    displayName: "AWS Lambda",
    siteUrl: "https://aws.amazon.com/lambda/",
    iconUrl: LambdaIcon,
  },
  apiGateway: {
    displayName: "AWS API Gateway",
    siteUrl: "https://aws.amazon.com/api-gateway/",
    iconUrl: ApiGatewayIcon,
  },
  dynamoDb: {
    displayName: "AWS Dynamo DB",
    siteUrl: "https://aws.amazon.com/dynamodb/",
    iconUrl: DynamoDBIcon,
  },
  ecs: {
    displayName: "AWS ECS",
    siteUrl: "https://aws.amazon.com/ecs/",
    iconUrl: EcsIcon,
  },
  rds: {
    displayName: "AWS RDS",
    siteUrl: "https://aws.amazon.com/rds/",
    iconUrl: RdsIcon,
  },
  sns: {
    displayName: "AWS SNS",
    siteUrl: "https://aws.amazon.com/sns",
    iconUrl: SnsIcon,
  },
  mui: {
    displayName: "MUI",
    siteUrl: "https://mui.com/",
    iconUrl: MuiIcon,
  },
} satisfies Record<string, KnownTechMetadata>;

export type KnownTechLabel = keyof typeof knownTech;

export default knownTech;
