import clsx from "clsx";
import { HTMLAttributes } from "react";
import { formatShortDate } from "@/lib/date";
import { MarkdownPageData } from "@/types/content";
import Icon from "./Icon";
import SmartLink from "./SmartLinks";
import Spacer from "./Space";

export interface PagePreviewProps extends HTMLAttributes<HTMLDivElement> {
  icon: string;
  url: string;
  title: string;
  description: string;

  size?: "base" | "lg";
  ghost?: boolean;
}

const PagePreview = ({
  icon,
  url,
  title,
  description,
  ghost = false,
  size = "base",
  ...props
}: PagePreviewProps) => {
  return (
    <>
      <SmartLink
        href={url}
        className={clsx(
          "flex rounded space-x-lg hover:bg-primary-lightest",
          // "items-center",
          {
            "p-sm -m-sm": ghost,
            "p-md": !ghost,
          },
          {
            "space-x-lg": size == "lg",
            "space-x-base": size == "base",
          },
          props.className
        )}
      >
        <div>
          <Spacer size="sm"></Spacer>
          <Icon className="text-gray-light" id={icon} size="base"></Icon>
        </div>
        <div>
          <h3
            className={clsx("font-medium  text-gray-darker", {
              "text-lg": size == "lg",
              "text-base": size == "base",
            })}
          >
            {title}
          </h3>
          {/* <Spacer size="xs"></Spacer> */}
          <p
            className={clsx("text-gray", {
              "text-xs": size == "base",
            })}
          >
            {description}
          </p>
        </div>
      </SmartLink>
    </>
  );
};

export default PagePreview;
