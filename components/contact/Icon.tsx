import Image, { StaticImageData } from "next/image";
import React from "react";

interface IconProps {
  icon: StaticImageData;
  alt: string;
  href: string;
}

const Icon = ({ icon, alt, href }: IconProps) => {
  return (
    <div className="bg-slate-200 flex justify-center items-center rounded-3xl max-w-12 border-2 border-slate-200">
      <a href={href} target="_blank">
        <Image alt={alt} src={icon} />
      </a>
    </div>
  );
};

export default Icon;
