import { HTMLAttributes, ReactNode, useState } from "react";
import clsx from "clsx";
import { FaChevronDown } from "react-icons/fa";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;

  // types
  info?: boolean;
  error?: boolean;
  warning?: boolean;

  // default state
  open?: boolean;
}

const Alert = ({
  title,
  children,
  info,
  error,
  warning,
  open = false,
  ...props
}: AlertProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const toggle = (event: any) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <details
      open={isOpen}
      className={clsx(
        "alert",
        "p-base border-l-8",
        "md:rounded md:rounded-r-lg",
        {
          "border-gray bg-gray-lightest": !info && !error,
          "border-primary bg-primary-lighter": info,
          "border-error bg-error-light": error,
          "border-warning bg-warning-light": warning,
        },
        props.className
      )}
    >
      <summary
        onClick={toggle}
        className="list-none font-medium flex items-center justify-between space-x-base"
      >
        <div>{title}</div>
        <FaChevronDown
          className={clsx(
            "flex-shrink-0 text-base text-gray-darker transition-transform",
            {
              "transform rotate-180": isOpen,
            }
          )}
        ></FaChevronDown>
      </summary>
      <div className="mt-base space-y-sm">{children}</div>
    </details>
  );
};

export default Alert;
