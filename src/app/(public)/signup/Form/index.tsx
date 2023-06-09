"use client";

import Input from "@/components/Input";
import { button } from "@/styles/button";
import { text } from "@/styles/text";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

const signUpFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export type SignUpFormData = z.infer<typeof signUpFormSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  const { h2 } = text();

  const handleSubmitForm = (data: SignUpFormData) => {
    toast.success(`${data.name}\n${data.email}\n${data.password}`);
    reset();
  };

  return (
    <form
      className="space-y-6 lg:w-1/2"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div className="flex justify-center items-center relative">
        <h2 className={h2()}>Create account</h2>
      </div>

      <Input
        id="name"
        name="name"
        type="text"
        placeholder="name"
        label="Name"
        register={register}
        error={errors.name?.message}
      />
      <Input
        id="email"
        name="email"
        type="text"
        placeholder="email"
        label="Email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="password"
        label="Password"
        register={register}
        error={errors.password?.message}
      />

      <div>
        <button type="submit" className={button()}>
          Sign Up
        </button>
      </div>
    </form>
  );
}
