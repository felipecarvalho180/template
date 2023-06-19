import React from "react";
import Form from "./Form";
import Animation from "./Animation";

export default async function Login() {
  return (
    <div className="flex lg:gap-10 items-center justify-center">
      <Animation />
      <Form />
    </div>
  );
}
