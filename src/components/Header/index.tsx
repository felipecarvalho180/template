"use client";

import Link from "next/link";
import { listItem } from "./styles";

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
        <li key={`link_${href}_${text}`} className={listItem()}>
          <Link href={href}>{text}</Link>
        </li>
      ))}
      <li className={listItem()}>
        {/* <ButtonLink onClick={onSignout}>Logout</ButtonLink> */}
      </li>
    </ul>
  );
}
