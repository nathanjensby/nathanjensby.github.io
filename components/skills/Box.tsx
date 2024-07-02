import React, { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BoxProps {
  className?: string;
  text?: string;
}

const Box = ({ text = "", className }: BoxProps) => {
  return (
    <div
      className={cn("p-4 border-2 rounded-lg border-slate-200 m-2", className)}
    >
      <span className="text-xl lg:text-sm">{text}</span>
    </div>
  );
};

export default Box;
