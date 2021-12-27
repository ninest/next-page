import clsx from "clsx";
import { HTMLAttributes, ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface ExpandableCodeProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  open: boolean;
  children: ReactNode;
}
const ExpandableCode = ({
  title,
  open,
  children,
  ...props
}: ExpandableCodeProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggle = (event: any) => {
    // TODO: find event type
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <details
      className={clsx("expandable block min-w-0", props.className)}
      open={isOpen}
    >
      <summary
        onClick={toggle}
        className={clsx(
          "ml-md md:ml-0", // If it's full-bleed on mobile, move the title
          // to the right so it's inline with the rest of the code
          "list-none font-mono text-sm bg-gray-800 text-gray-300 px-md py-xs",
          "inline-flex items-center justify-between space-x-base rounded-md"
        )}
      >
        <div>{title}</div>
        <FaChevronDown
          className={clsx("ml-sm text-gray-light transition-opacity", {
            "opacity-5": isOpen,
          })}
        ></FaChevronDown>
      </summary>

      <div className="mt-1 expandable-children">{children}</div>
    </details>
  );
};

export default ExpandableCode;
