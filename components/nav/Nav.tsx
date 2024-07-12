import React, { ReactNode } from "react";
import Image from "next/image";

const Nav = () => {
  const links = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed left-0 top-0 flex w-full justify-center flex-wrap lg:static lg:w-auto backdrop-blur-2xl py-8 lg:backdrop-filter-none  ">
        {links.map((link, index) => (
          <div
            key={index}
            className=" lg:px-4 lg:mx-4 border-stone-300 p-4 dark:bg-zinc-800/30 rounded-xl bg-gray-200 "
          >
            <a href={link.href}>{link.text}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
