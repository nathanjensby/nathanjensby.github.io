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
            {renderWordAnimation(secondWord, 2500)}
          </div>
        </span>
      </span>
    );
  };

  return (
    <div className="my-20 flex items-center">
      <div className="py-10 flex flex-col items-center justify-center">
        <h1 className="text-6xl lg:text-8xl font-bold text-center my-10 lg:my-5">
          <TypographyAnimation />
        </h1>
        <p className="text-4xl lg:text-xl">UX Developer</p>
      </div>
    </div>
  );
};

export default Hero;
