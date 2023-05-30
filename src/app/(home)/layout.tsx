import Header from "@/components/Header";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const headerLinks = [
  {
    href: "/ssr",
    text: "SSR Page",
  },
  {
    href: "/styled",
    text: "Styled Page",
  },
  {
    href: "/about",
    text: "About Page",
  },
];

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header headerLinks={headerLinks} />
      {children}
    </div>
  );
}
