"use client";

import { LoginFormData } from "@/app/(public)/login/fragments/Form";
import { input } from "@/styles/input";
import React, { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register: UseFormRegister<any>;
  error?: string;
}

export default function Input({
  id,
  label: inputLabel,
  register,
  error: errorMessage,
  ...rest
}: Props) {
  const { base, label, error } = input();

  return (
    <div className="flex flex-col w-full">
      {inputLabel && (
        <label htmlFor={id} className={label()}>
          {inputLabel}
        </label>
      )}
      <input
        {...rest}
        className={base()}
        {...register(rest.name! as keyof LoginFormData)}
      />
      {errorMessage && <span className={error()}>{errorMessage}</span>}
    </div>
  );
}
