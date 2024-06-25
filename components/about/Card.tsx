import React, { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  className?: string;
  title?: string;
  imgSrc?: "";
  blurbs?: string[];
  variant: "img" | "text";
}

const Card = ({
  variant = "text",
  imgSrc = "",
  title = "",
  blurbs = [],
  className = "",
}: CardProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-xl p-4 m-2 border-slate-200 border-2",
        className
      )}
    >
      {variant === "text" && (
        <>
          <h3 className="text-xl mb-4">{title}</h3>
          {blurbs.map((blurb, index) => (
            <p className="text-sm mb-2" key={index}>
              {blurb}
            </p>
          ))}
        </>
      )}

      {variant === "img" && (
        <img src={imgSrc} className={cn("w-full", className)} />
      )}
    </div>
  );
};

export default Card;
