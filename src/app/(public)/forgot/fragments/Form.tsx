"use client";

import BackButton from "@/components/BackButton";
import Input from "@/components/Input";
import { button } from "@/styles/button";
import { text } from "@/styles/text";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const forgotFormSchema = z.object({
  email: z.string().email(),
});

export type ForgotFormData = z.infer<typeof forgotFormSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotFormData>({
    resolver: zodResolver(forgotFormSchema),
  });

  const { h2 } = text();

  const handleSubmitForm = (data) => {};

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="flex justify-center items-center relative">
        <BackButton className="absolute left-0" />
        <h2 className={h2()}>Recover account</h2>
      </div>

      <Input
        id="email"
        name="email"
        type="text"
        placeholder="email"
        label="Email"
        register={register}
        error={errors.email?.message}
      />

      <div>
        <button type="submit" className={button()}>
          Send
        </button>
      </div>
    </form>
  );
}
