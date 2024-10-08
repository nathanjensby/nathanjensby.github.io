import React from "react";
import Section from "@/components/common/Section";
import Box from "./Box";

const Page = () => {
  const skills = [
    "Typescript",
    "React",
    "Webpack",
    "HTML5",
    "Accessibility",
    "Jest",
    "Cypress",
    "Playwright",
    "Chromatic",
    "Storybook",
    "CI/CD",
  ];
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap justify-around">
        {skills.map((skill, index) => (
          <Box key={index} text={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Page;
