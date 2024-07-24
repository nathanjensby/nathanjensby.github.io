import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/utils/cn";

interface CardProps {
  className?: string;
  title?: string;
  imgSrc?: StaticImageData;
  imgAlt?: string;
  blurbs?: string[];
  variant: "img" | "text";
}

const Card = ({
  variant = "text",
  imgSrc,
  imgAlt = "",
  title = "",
  blurbs = [],
  className = "",
}: CardProps) => {
  return (
    <div
      className={cn(
        `w-full justify-center rounded-xl p-8 m-2 border-slate-200 border-2 flex flex-col items-center`,
        className
      )}
    >
      {variant === "text" && (
        <>
          <h3 className="text-2xl mb-4">{title}</h3>
          {blurbs.map((blurb, index) => (
            <p className="text-xl lg:text-lg mb-2 max-w-prose" key={index}>
              {blurb}
            </p>
          ))}
        </>
      )}

      {variant === "img" && imgSrc && (
        <div className="overflow-hidden border-slate-950 border-2 rounded-xl w-full">
          <Image
            src={imgSrc}
            className={cn("w-full", className)}
            alt={imgAlt}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
