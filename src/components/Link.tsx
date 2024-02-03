import React from "react";

export default function Link(props: linkProps) {
  const { href, children } = props;
  return (
    <a
      href={href}
      target="_blank"
      className="text-white font-medium underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-colors duration-500 decoration-1 outline-none focus:decoration-white"
    >
      {children}
    </a>
  );
}

type linkProps = {
  href: string;
  children: React.ReactNode;
};
