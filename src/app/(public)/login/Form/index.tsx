"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { button } from "@/styles/button";
import Input from "@/components/Input";
import { text } from "@/styles/text";
import { link } from "@/styles/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const router = useRouter();

  const handleSubmitForm = async (data: LoginFormData) => {
    const { email, password } = data;

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response?.error) {
      toast.error(response.error);
    } else {
      router.push("/");
    }
  };

  const { h2 } = text();

  return (
    <form
      className="space-y-6 lg:w-1/2"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <h2 className={h2()}>Sign in to your account</h2>

      <Input
        id="email"
        name="email"
        type="text"
        placeholder="email"
        label="Email"
        register={register}
        error={errors.email?.message}
      />

      <div className="flex flex-col gap-2">
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          label="Password"
          register={register}
          error={errors.password?.message}
        />
        <div className="flex items-center justify-end">
          <Link href="/forgot" className={link()}>
            Forgot password?
          </Link>
        </div>
      </div>

      <div className="mb-4">
        <button type="submit" className={button()}>
          Sign in
        </button>
      </div>

      <p className="text-sm text-center">
        Don&apos;t you have an account?{" "}
        <Link href="/signup" className={link()}>
          Sign Up
        </Link>
      </p>
    </form>
  );
}
