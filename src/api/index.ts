import { decryptToken } from "@/service/cyptojs";
import axios from "axios";
import { cookies } from "next/headers";

export const request = axios.create({
  baseURL: "http://localhost:3333",
});

request.interceptors.request.use((config) => {
  const token = cookies().get("token")?.value;

  if (!token) {
    return config;
  }

  config.headers.set("Authorization", `Bearer ${decryptToken(token)}`);
  return config;
});
