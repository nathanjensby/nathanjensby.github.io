import React from "react";
import Section from "@/components/common/Section";
import Icon from "@/components/common/Icon";
import GithubIcon from "@/public/assets/icons8-github-384.png";
import NicCageIcon from "@/public/assets/cagev2.png";
import LeopardyIcon from "@/public/assets/LeopardyIcon.png";
import { StaticImageData } from "next/image";

type IProjectTile = {
  title: string;
  description: string;
  githubHref: string;
  githubAlt: string;
  projectIcon: StaticImageData;
  projectHref: string;
  projectAlt: string;
};

const Projects = () => {
  const projectsData = [
    {
      title: "Click Cage",
      description:
        "This was a take-home-technical for my interview at Indeed.  I think it showcases my ability to deliver on requirements while including a level of creativity and personalization.",
      githubHref: "https://github.com/nathanjensby/dotgame",
      githubAlt: "Link to Github (Opens in a new tab)",
      projectIcon: NicCageIcon,
      projectHref: "https://clickcage.netlify.app/",
      projectAlt: "Link to Click Cage (Opens in a new tab)",
    },
    {
      title: "Leopardy!",
      description:
        "For my wife's birthday this year, she requested we play a homemade version of Jeopardy! with some friends.  I used Vite with TypeScript and deployed via Netlify.",
      githubHref: "https://github.com/nathanjensby/leopardy",
      githubAlt: "Link to Github (Opens in a new tab)",
      projectIcon: LeopardyIcon,
      projectHref: "https://leopardy.netlify.app/",
      projectAlt: "Link to Leopardy (Opens in a new tab)",
    },
  ];

  const ProjectTile = ({
    title,
    description,
    githubHref,
    githubAlt,
    projectAlt,
    projectHref,
    projectIcon,
  }: IProjectTile) => (
    <div className="flex flex-col p-8 m-2 max-w-[400px] border-slate-200 border-2 rounded-xl">
      <h3 className="flex justify-center text-xl pb-8">{title}</h3>
      <p className="pb-8">{description}</p>
      <div className="flex justify-around">
        <Icon icon={GithubIcon} href={githubHref} alt={githubAlt} />
        <Icon icon={projectIcon} href={projectHref} alt={projectAlt} />
      </div>
    </div>
  );

  return (
    <Section id="projects" title="Projects">
      <div className="flex justify-around flex-col lg:flex-row ">
        {projectsData.map((project, index) => (
          <ProjectTile key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
