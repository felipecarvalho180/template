"use client";

import Link from "next/link";
import { button } from "@/styles/button";

interface HeaderLink {
  href: string;
  text: string;
}
interface Props {
  headerLinks: HeaderLink[];
}

export default function Header({ headerLinks }: Props) {
  return (
    <ul className="flex py-4 px-0">
      {headerLinks.map(({ href, text }) => (
        <li
          key={`link_${href}_${text}`}
          className={button({ bg: "headerLinks" })}
        >
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  );
}
