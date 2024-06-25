import React from "react";
import Card from "@/components/about/Card";
import Section from "../common/Section";

const About = () => {
  const aboutItems = [
    {
      img: "",
      title: "Family",
      blurbs: [
        "My wife of almost 10 years, Ginny, is a stay-at-home mother for our two children. She's got a great knack for making connections and solving problems and she's fiercely loyal to those she loves.",
        "Griffin is 5 and will be entering Kindergarten in the fall of 2024.  He's curious, talkative, and loves soccer and Mario.  Like his dad, he loves making others laugh.",
        "Betty will be turning 3 in the fall of 2024.  She's our spicy little one.  Like her brother, she is very coordinated, active, and fast.  I think where Griff is more 'class clown', Betty will be more 'stand-up comedian'.",
      ],
    },
    {
      img: "",
      title: "Occupation",
      blurbs: [
        "For the past 5 years, I've been working at Indeed. I started as an Associate UX Developer and by the end had put together a compelling promotion case for Sr. UX Developer.  I worked on multiple products supporting many product groups at a time, delivering high-quality and fully accessible UI components that helped change the way enterprise clients hired.",
        "At Fjord/Accenture, I collaborated with product, design, and clients to determine scope, effort, and handoff deliverables expediently.",
        "Previous to my front end development career, I wore many hats.  I've been a nanny, an expediter, a hookah bar employee, and a customer support supervisor.",
      ],
    },
    {
      img: "",
      title: "Recreation",
      blurbs: [
        "I've always loved sports, but I've found as I've gotten older that I really have a finite amount of time/effort/care available to me.  It used to be pretty evenly split between the Texas Rangers, Dallas Cowboys, Dallas Stars, and Oklahoma State Cowboys, but I'd say about 95% of my chips have been pushed into the only professional sports team in Austin: Austin FC.",
        "I'm also a big fan of illusions, Nic Cage, Rubik's cubes, spending time outdoors, and crokinole.",
      ],
    },
    { img: "", title: "Motivation", blurbs: ["", ""] },
  ];
  return (
    <Section title="About">
      {aboutItems.map((form, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={`${
              isEven ? "flex-col" : "flex-col-reverse"
            } flex lg:flex-row`}
          >
            {isEven && <Card variant="img" imgSrc="" />}

            <Card variant="text" title={form.title} blurbs={form.blurbs} />
            {!isEven && <Card variant="img" imgSrc="" />}
          </div>
        );
      })}
    </Section>
  );
};

export default About;
