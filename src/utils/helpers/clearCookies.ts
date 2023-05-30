import { cookies } from "next/headers";

export const clearCookies = () => {
  const currentCookies = cookies().getAll();
  currentCookies.forEach((cookie) => cookies().set(cookie.name, ""));
};
