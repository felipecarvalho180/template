import Header from "@/components/Header";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const headerLinks = [
  {
    href: "/",
    text: "SSR Page",
  },
  {
    href: "/static",
    text: "Static",
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
