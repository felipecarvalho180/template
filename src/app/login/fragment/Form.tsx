"use client";

import React, { useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

interface Props {
  hasTokenError: boolean;
}

export default function Form({ hasTokenError }: Props) {
  const router = useRouter();

  const handleSubmit = async () => {
    const response = await signIn("credentials", {
      email: "teste",
      password: "test@123",
      redirect: false,
    });

    if (response?.error) {
      toast.error(response.error);
    } else {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  };

  useEffect(() => {
    if (hasTokenError) {
      toast.error("Seu token expirou");
    }
  }, []);

  return (
    <div>
      <Toaster />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
