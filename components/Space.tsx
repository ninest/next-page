import clsx from "clsx";

const sizes = ["xs", "sm", "base", "md", "lg", "xl"] as const;
type Size = typeof sizes[number];

interface SpacerProps {
  size?: Size;
  axis?: "x" | "y";
}

const Spacer = ({ size = "base", axis = "y" }: SpacerProps) => {
  const prefix = axis == "x" ? "w" : "h";
  return <div className={clsx(`${prefix}-${size}`)}></div>;
};

// So Tailwind can read it
// TODO: fix
const _ = [
  "h-md",
  "h-base",
  "h-sm",
  "h-xs",
  "h-xl",
  "h-lg",
  "w-md",
  "w-base",
  "w-sm",
  "w-xs",
  "w-xl",
  "w-lg",
] as const;

export default Spacer;
