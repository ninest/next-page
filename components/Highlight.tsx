import clsx from "clsx";
import { HTMLAttributes } from "react";

interface HighlightProps extends HTMLAttributes<HTMLDivElement> {
  theme: "gray" | "primary" | "error" | "warning";
  size: "base" | "lg";
}

const Highlight = ({
  children,
  theme = "gray",
  size = "base",
  ...props
}: HighlightProps) => {
  return (
    <div
      className={clsx(
        "py-16 border-t border-b",
        {
          "bg-gray-50 border-gray-100": theme === "gray",
          "bg-primary-50 border-primary-100": theme === "primary",
          "bg-error-50 border-error-100": theme === "error",
          "bg-warning-50 border-warning-100": theme === "warning",
        },
        {
          "py-md": size === "base",
          "py-16": size === "lg",
        },
        props.className
      )}
    >
      {children}
    </div>
  );
};
export default Highlight;
