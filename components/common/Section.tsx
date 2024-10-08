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
      <div className="flex justify-center my-4 lg:my-8">
        <h1 className="text-4xl ">{title}</h1>
      </div>
      {children}
    </section>
  );
};

export default Section;
