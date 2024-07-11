import React, { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionProps {
  className?: string;
  id: string;
  title?: string;
  children: ReactNode;
}

const Section = ({ title = "", className, children, id }: SectionProps) => {
  return (
    <section id={id} className={cn("w-full mt-32", className)}>
      <div className="flex justify-center my-4">
        <h2 className="text-4xl ">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
