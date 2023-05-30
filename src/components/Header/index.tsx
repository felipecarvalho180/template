"use client";
import Link from "next/link";
import Cookie from "js-cookie";

import { listItem } from "./styles";

export default function Header() {
  const accessToken = Cookie.get("next-auth.session-token");

  return (
    <ul className="flex py-4 px-0">
      {!accessToken && (
        <>
          <li className={listItem()}>
            <Link href="/">Home</Link>
          </li>
          <li className={listItem()}>
            <Link href="/login">Login Page</Link>
          </li>
        </>
      )}

      {accessToken && (
        <>
          <li className={listItem()}>
            <Link href="/ssr">SSR Page</Link>
          </li>
          <li className={listItem()}>
            <Link href="/styled">Styled Page</Link>
          </li>
          <li className={listItem()}>
            <Link href="/about">About Page</Link>
          </li>
          <li className={listItem()}>
            {/* <ButtonLink onClick={onSignout}>Logout</ButtonLink> */}
          </li>
        </>
      )}
    </ul>
  );
}
