"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      await signIn("credentials", {
        email: "teste",
        password: "test@123",
        redirect: false,
      });

      router.push("/");
    } catch (error) {}
  };

  return <button onClick={handleSubmit}>Login</button>;
}
