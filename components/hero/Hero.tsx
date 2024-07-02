import React from "react";

const Hero = () => {
  return (
    <div className="my-20 flex items-center">
      <div className="relative z-[-1] flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="py-10 flex flex-col items-center justify-center">
          <h1 className="text-8xl lg:text-5xl  text-center my-10 lg:my-5">
            Nathan Jensby
          </h1>
          <p className="text-4xl lg:text-xl">UX Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
