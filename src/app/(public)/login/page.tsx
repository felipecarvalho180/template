import React from "react";
import Form from "./fragments/Form";
import { cookies, headers } from "next/headers";

export default async function Login() {
  const expiredTokenError = cookies().has("expiredToken");

  return <Form hasTokenError={expiredTokenError} />;
}
