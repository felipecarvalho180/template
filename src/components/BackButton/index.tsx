"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  className: string;
}

export default function BackButton({ className }: Props) {
  const router = useRouter();

  return (
    <div
      className={`flex items-center cursor-pointer ${className}`}
      onClick={() => router.back()}
    >
      <ChevronLeft className="text-indigo-500" />
      <span className="text-sm font-bold hidden lg:flex">Voltar</span>
    </div>
  );
}
