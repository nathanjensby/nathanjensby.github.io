import React from "react";
import Image from "next/image";
import Section from "../common/Section";
import Icon from "@/components/contact/Icon";
import portrait from "@/public/assets/Toast.png";
import LinkedInIcon from "@/public/assets/linkedin.png";
import TwitterIcon from "@/public/assets/twitter.png";
import GithubIcon from "@/public/assets/icons8-github-384.png";

const Contact = () => {
  const contactData = [
    {
      icon: LinkedInIcon,
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/nathanjensby/",
    },
    {
      icon: TwitterIcon,
      alt: "Twitter",
      href: "https://x.com/nathjensby",
    },
    {
      icon: GithubIcon,
      alt: "GitHub",
      href: "https://github.com/nathanjensby",
    },
  ];
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col justify-center items-center">
        <h3 className="m-2">Something cheesy about collaborating!</h3>
        <div className="max-w-md rounded-xl border-slate-200 border-2 overflow-hidden m-4">
          <Image alt="Self portrait" src={portrait} />
        </div>
        <div className="flex justify-between max-w-md w-full my-8">
          {contactData.map((link, index) => (
            <Icon {...link} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
