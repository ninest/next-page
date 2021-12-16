import clsx from "clsx";
import { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLDivElement> {}

const Icon = ({ children, ...props }: IconProps) => {
  if (children)
    // Emoji icon
    return <div className={clsx("text-5xl", props.className)}>{children}</div>;
  else return <></>;
};
export default Icon;
