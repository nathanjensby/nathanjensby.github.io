import React from "react";

const Hero = () => {
  const TypographyAnimation = () => {
    const firstWord = "NATHAN";
    const secondWord = "JENSBY";

    const renderWordAnimation = (word: string, startingDelay: number) => {
      return word.split("").map((letter, index) => (
        <span
          key={index}
          className={`animate-fall animation-delay-[${startingDelay + index * 50}ms] translate-y-[-150%]`}
          style={{ animationDelay: `${startingDelay + index * 50}ms` }}
        >
          {letter}
        </span>
      ));
    };

    return (
      <span className="relative inline-flex ml-2 overflow-hidden p-2">
        <div className="flex flex-row">{renderWordAnimation(firstWord, 0)}</div>

        <span className="absolute top-0 bottom-0">
          <div className="flex flex-row">
            {renderWordAnimation(secondWord, 3250)}
          </div>
        </span>
      </span>
    );
  };

  return (
    <div className="my-20 flex items-center">
      <div className="relative z-[-1] flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="py-10 flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold text-center my-10 lg:my-5">
            <TypographyAnimation />
          </h1>
          <p className="text-4xl lg:text-xl">UX Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
