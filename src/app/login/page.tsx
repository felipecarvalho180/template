import React from "react";
import Form from "./fragment/Form";
import { cookies, headers } from "next/headers";

export default async function Login() {
  const expiredTokenError = cookies().has("expiredToken");

  return <Form hasTokenError={expiredTokenError} />;
}
