import React from "react";
import Form from "./Form";
import Animation from "./Animation";
import BackButton from "@/components/BackButton";

export default function SignUp() {
  return (
    <div className="flex lg:gap-10 items-center justify-center relative">
      <BackButton className="absolute left-0 top-0 z-10" />
      <Animation />
      <Form />
    </div>
  );
}
