import { headers } from "next/headers";

export const getHeaderToken = () => {
  return headers()
    .get("cookie")
    ?.split("; ")
    .find((cookie) => cookie.startsWith("token="))
    ?.split("=")[1];
};
