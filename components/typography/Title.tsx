import clsx from "clsx";
import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLDivElement> {}

const Title = ({ children, ...props }: TitleProps) => {
  return (
    <h1 className={clsx("font-display text-5xl font-black leading-relaxed tracking-normal", props.className)}>{children}</h1>
  );
};
export default Title;
