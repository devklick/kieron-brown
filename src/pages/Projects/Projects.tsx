import ProjectCard from "../../components/ProjectCard";

import "./Projects.scss";

interface ProjectsProps {}

// eslint-disable-next-line no-empty-pattern
function Projects({}: ProjectsProps) {
  return (
    <div className="page-projects">
      <div className="projects__card-container">
        <ProjectCard
          name="Kieron Brown (this site)"
          repo="https://github.com/devklick/kieron-brown"
          site={{ url: "https://devklick.github.io/kieron-brown/" }}
          tech={["react", "vite", "ts", "zustand", "scss", "ghPages"]}
          description={[
            `This is the project behind my web CV.`,

            `After feeling that my CV was a little dated (it was created forever 
ago using some generic Microsoft Word template), I rebuilt it using 
Affinity Designer - a great piece of graphic design software. 
I was really happy with the look and feel of it but it was tricky to 
maintain, having to manually move boxes around the screen, trying to 
get things to align properly etc. I also moved from Windows to Linux, 
and unfortunately Affinity Designer isn't available on linux. Due to 
these reasons (and for a little fun), I decided to rebuild my CV as 
a little web app - this one!`,
          ]}
        />
        <ProjectCard
          name="Basic Blackjack"
          repo="https://github.com/devklick/basic-blackjack"
          site={{ url: "https://devklick.github.io/basic-blackjack/" }}
          tech={[
            "react",
            "cra",
            "ts",
            "electron",
            "zustand",
            "scss",
            "ghPages",
          ]}
          description={[
            `Basic Blackjack - as the name would suggest - is a basic version of 
the Blackjack card game. It was my first ever application created 
with React. In fact, it was my first frontend application - ever!`,

            `It's something I come back to every now and then to add some tweaks and 
features as I gain more experience and learn of new awesome packages`,

            "Visit the site and have a play!",
          ]}
        />

        <ProjectCard
          name="Snek"
          repo="https://github.com/devklick/Snek"
          site={{ url: "https://devklick.github.io/Snek/", status: "WIP" }}
          tech={["dotnet", "csharp", "consoleApp", "blazor", "ghPages"]}
          description={[
            `Snek is a console version of the classic game, Snake. It's something 
I started many years ago (probably in the first couple of years of my 
career in software development), and over the years have tried to keep 
it up to date with the latest technologies, fix issues and add new 
features.`,

            `C# was the first programming language I ever learned, and it's 
something I still really enjoy working with, despite it not being 
part of my current day-to-day job. As such, I love coming back to 
this game to see how I can make improvements, or even just to play 
the game!`,

            `Although this is a console application, I'm currently experimenting 
with trying to run it in Blazor. While I'm finding this a real challenge, 
I'm looking forward to having it run from a browser. If you're familiar 
with Blazor WebAssembly and feel like getting involved, head over to 
the repo and check out the open issues.`,
          ]}
        />

        <ProjectCard
          name="EvarDoc"
          repo="https://github.com/devklick/evardoc"
          site={{ url: "https://www.npmjs.com/package/evardoc" }}
          tech={["nodeJs", "ts", "consoleApp"]}
          description={[
            `I always found it frustrating that when joining an existing project, 
I'd have to try and work out what environment variables I need to 
set up to run the code. In many cases these are defined in the 
repository readme, but the readme often goes stale and gets forgotten 
about. In other cases, I found that I'd have to search through 
the code and find out what's used where.`,

            `I created EvarDoc as a way to avoid this. It allows you to 
automatically check in a template of your .env file into the 
repository, by parsing your actual .env file and extracting the keys 
from it, then sticking them into a template file which can safely be 
committed to the repo. It also allows the variables to be documented 
using some specific keywords, which again helps newcomers to the code 
understand what the variable is used for and what kind of value it 
should contain.`,

            `Although this project does solve a problem, it's not something that 
I've ever used in any of my other projects.`,
          ]}
        />

        <ProjectCard
          name="TermBlock"
          repo="https://github.com/devklick/termblock"
          site={{ url: "https://www.npmjs.com/package/termblock" }}
          tech={["react", "vite", "ts", "styled", "story"]}
          description={[
            `Although I'd started getting familiar with building frontend 
applications using React, I found (and still find) my knowledge of 
CSS as a weak point. I created my TermBlock library as a way to play 
around with CSS and try and improve my knowledge of it.`,

            `TermBlock is a React library that mimics a terminal or console, purely 
from a display point of view. It allows you to display a terminal on your 
screen and mimic static command inputs and outputs. It's nothing fancy, 
and there isn't much of a use-case for it, but I enjoyed working on 
it and definitely improved my understanding of CSS.`,

            `Something that I found really fun with this project was creating color 
themes. You can define custom themes to render your terminals in 
(e.g. Windows theme, or macOS, or something totally custom)`,
          ]}
        />
      </div>

      <ProjectCard
        name="Flaggle"
        repo="https://github.com/devklick/flaggle"
        tech={[
          "react",
          "cra",
          "ts",
          "nx",
          "prisma",
          "postgres",
          "express",
          "zod",
        ]}
        description={[
          `Back when games like Wordle and Nerdle starting popping up left, right 
and centre, I created Flaggle.`,

          `Flaggle is a game where you have to try and guess which country a flag 
belongs to, having only revealed part of that flag. You have the option 
to submit your guess from a list of pre-defined countries, or reveal 
the next piece of the flag to help give a better picture of what the 
overall image looks like.`,

          `Unfortunately it's not deployed anywhere (because it's not entirely 
contained in the browser, and because I'm a cheapskate who does want 
to fork out hosting fees), so if you want to have a play, you need to 
check out the repository and follow the steps in the readme to get it 
up and running locally.`,
        ]}
      />
    </div>
  );
}

export default Projects;
