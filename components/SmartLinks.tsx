import type { NextComponentType } from "next";
import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes, FC } from "react";
import { useRouter } from "next/dist/client/router";

interface SmartLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  underline?: boolean;
  activeClassName?: string;
}

const SmartLink = ({
  href,
  activeClassName,
  underline = false,
  ...props
}: SmartLinkProps) => {
  const router = useRouter();
  const className = clsx(props.className, {
    underline,
    [`${activeClassName}`]: router.asPath === href,
  });

  if (href[0] === "/")
    return (
      <Link href={href}>
        <a {...props} className={className} />
      </Link>
    );

  return <a {...props} className={className} target="_blank" rel="noopener" />;
};

export default SmartLink;
