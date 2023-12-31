import { JobCardProps } from "../../components/JobCard";

const jobs: Array<JobCardProps> = [
  {
    title: "Senior Software Engineer",
    company: "Incentive Games",
    from: new Date(2022, 8),
    description: [
      `Moving into the role of Senior Engineer at Incentive Games didn't involve 
too much change at first. I was already undertaking many of the tasks expected 
by a senior, so the transition was fairly seamless.`,

      `As time went on, I found myself become more involved in discussions with clients
to iron out requirements, get to the bottom of bugs etc. I also became more 
involved in the earlier stages of designing new games or features to existing games.
Once the architecture of a new change had been bottomed out, I'd often be 
tasked with breaking breaking this down into manageable chunks and detailing 
the various steps required to develop the change.`,

      `During my time in this position, I found myself occasionally being relied
on for our-of-hours support, although in all honesty this is something I put 
a lot of effort into avoiding. I always make exceptions whenever new changes 
are released to production, but for general day-to-day support issues outside 
of working hours, I tend to avoid signing myself up for this. 
Having said that, I admit that I do often spend time out-of-hours working
on projects, either planning, writing Jira stories, reviewing PR's, refactoring 
code, or trying to work out that niggly little but that I wasted most of my 
day on but later turned out to be an obvious ID10T error.`,
    ],
    tech: ["react", "nodeJs", "ts", "rds", "postgres", "lambda", "elb", "sns"],
  },
  {
    title: "Software Engineer",
    company: "Incentive Games",
    from: new Date(2021, 9),
    to: new Date(2022, 8),
    description: [
      `As my previous two jobs were in the Energy Industry, and both of those 
companies went into administration (along with many other energy suppliers), 
I figured it was a good time to head in another direction.`,

      `Joining Incentive Games was exciting, although somewhat daunting. I joined 
in a fullstack role having never worked with any frontend technologies before,
so learning to work with React was a an exciting challenge. Likewise, 
I'd never worked with JavaScript before (or any dynamically typed languages), 
so I found moving from fully typed languages like C# to JavaScript extremely 
difficult. I still find it bizarre that dynamically typed languages exist, 
and people choose to use them over statically typed languages! Anyways, I'm 
grateful that I was able to get to grips with these on the job.`,

      `The products built at Incentive Game all follow an event-driven microservice 
architecture, so even though I was learning and using some technologies that 
were totally new to me, a lot of what I'd learned in my previous roles was 
relevant and helped me in this position.`,

      `Although this was a fullstack role and I was often involved in writing and 
reviewing front end code, I naturally ended up focusing on where my strength 
lies - in backend development. As I became more familiar with our backend 
systems, I became somewhat of a pillar for colleagues to lean on when 
investigating complex issues. I think this was one of the main reasons I 
was offered a promotion to Senior Engineer.`,
    ],
    tech: ["react", "nodeJs", "ts", "rds", "postgres", "lambda", "elb", "sns"],
  },
  {
    title: "Software Engineer",
    company: "Peoples Energy",
    from: new Date(2021, 0),
    to: new Date(2021, 9),
    tech: [
      "lambda",
      "sns",
      "ecs",
      "apiGateway",
      "rds",
      "dynamoDb",
      "bitbucketPipelines",
      "dotnet",
      "csharp",
      "ts",
    ],
    description: [
      `Joining Peoples Energy was an exciting move in my career. It was here that 
I gained exposure to the power of serverless computing, opening up a whole 
new array of tools to learn and leverage when building software.`,

      `I joined a team responsible for designing and building new applications to 
serve both internal and external customers. Utilizing the strengths that I'd 
built up in my previous role, I focused on development of backend services, 
such as Web API's, databases, and data pipelines.`,

      `My most proud achievement while working in this role was designing and building
a dynamic process for importing energy data flows into our internal systems.
If you have never had the pleasure of working with these data flows, they're 
essentially CSV files containing nested groups of data, as opposed to being 
a flat structure. They can be challenging to work with programmatically, so 
I built a series of applications to automatically build DTO definitions and 
parse the raw data flow content into an instance of the corresponding DTO. 
This hugely improved the ability to programmatically work with data 
originating from (and destined to) the energy industry.`,

      `Sadly my time with Peoples Energy was cut shorter than expected when the 
company ceased treating towards the end of 2021.`,
    ],
  },
  {
    title: "Software Engineer",
    company: "Spark Energy",
    from: new Date(2016, 11),
    to: new Date(2020, 11),
    tech: [
      "crm",
      "dotnet",
      "csharp",
      "sqlServer",
      "rabbitMq",
      "consoleApp",
      "iis",
      "jenkins",
    ],
    description: [
      `During my time as a Software Engineer for Spark Energy, I was focused 
mostly on backend development. The only exposure to any frontend 
development I had was working with Microsoft Dynamics CRM, although I'm 
not sure if this really qualifies.`,

      `Anyway, I was largely responsible for maintaining and enhancing a 
system that handled the cleansing and validating of new customer data. 
This was very much a legacy application - a C# console app that ran on 
a schedule, polled data from the CRM, and carried out a series of checks 
and transformations to ensure that the data was valid and that we'd be 
able to continue with the customers order to register their energy supplies. 
Due to the amount of time I spent working on it, and regardless of quirks, 
I became quite attached to it. I became the go-to person for anything 
related to it. Although I had inherited it, it felt like "mine".`,

      `I briefly mentioned Dynamics CRM - this is what we used for storing and 
displaying our customer and business data. I was often involved in 
creating and releasing updates to introduce new pages, workflows, 
plugins etc.`,

      `A lot of our data processing was done in batch via SQL stored procedures, 
so a lot of my time went into writing, maintaining and improving these. 
I had already gained some exposure to SQL while working in the test team, 
and diving deeper gave me a chance to get a much better understand of how 
a relational database works, how to model tables, design indexes based on
access patterns, and how to go about debugging and optimizing poorly-performing 
queries.`,

      `My time in this position overlapped with the governments push to roll-out
smart meters across the UK. As such, I was involved in building a system 
that allowed the company to integrate with customers meters. Due to the 
well-architected event-driven design of this workflow system (which I 
cannot take any credit for - this part was already ironed out before I 
joined the project), it was really enjoyable to work on. Until this point
I hadn't given much though to design patterns, and this project really 
opened my eyes to the various common patterns, and when/why to use them.`,

      `Remember the system that validated customer data (my precious)? The very 
last project I had the pleasure of working on was the long-overdue re-write 
of this application. Having gained considerable knowledge about system design 
and software architecture by this point, the team and I done a great job 
of re-building this from the ground up using an event driven microservice
architecture. This truly was a perfect way to end my journey with Spark Energy.`,
    ],
  },
  {
    title: "Systems Test Analyst",
    company: "Spark Energy",
    from: new Date(2015, 3),
    to: new Date(2016, 11),
    tech: ["testRail", "postman", "soapUi", "sqlServer", "crm"],
    description: [
      `I started my career in software development as a Systems Test Analyst for a 
local energy supplier back in 2015. I had actually joined the company as a 
Customer Advisor around 6 months prior, having never even considered working 
in the tech industry, and was fortunate enough to be given the chance to 
join the test team. I have a few people to thank for this, but I wont 
mention any names here. If they happen to read this, I'm sure they'll 
know.`,

      `During my time in this position, I was responsible for planning and 
conducting the appropriate tests - both functional and non-functional - 
for most of the changes to our internal systems. Most of this testing 
was conducted manually, whether via web UI, desktop application, console 
application etc. As time went on, I gained exposure to some tools that 
helped automate some of the API testing.`,

      `Through my exposure to writing automated API tests using these tools, 
and writing simple SQL scripts to setup and teardown test data, I gained 
the attention of the Development Team Lead and found myself with the 
opportunity to join the development team.`,
    ],
  },
];

export default jobs;
