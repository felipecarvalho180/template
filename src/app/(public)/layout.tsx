import { card } from "@/styles/card";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { form } = card();

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className={form()}>{children}</div>
    </div>
  );
}
