import clsx from "clsx";
import { HTMLAttributes } from "react";
import { IconType } from "react-icons";
import {
  FaGithub,
  FaGrinBeam,
  FaMoon,
  FaPencilAlt,
  FaSearch,
  FaSortNumericUp,
  FaSun,
} from "react-icons/fa";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "base" | "md" | "lg";
  id?: string;
}

const Icon = ({ children, size = "base", id, ...props }: IconProps) => {
  const className = clsx(
    "text-gray",
    {
      "text-5xl": size == "lg",
      "text-2xl": size == "md",
      "text-xl": size == "base",
      "text-sm": size == "sm",
    },
    props.className
  );
  if (children) {
    // Emoji icon
    return <div className={className}>{children}</div>;
  } else if (id) {
    const Component = iconMap[id];
    return (
      <>
        <Component className={className}></Component>
      </>
    );
  } else return <></>;
};
export default Icon;

const iconMap: Record<string, IconType> = {
  pencil: FaPencilAlt,
  search: FaSearch,
  dsc: FaSortNumericUp,
  github: FaGithub,
  grin: FaGrinBeam,
  moon: FaMoon,
  sun: FaSun,
};
