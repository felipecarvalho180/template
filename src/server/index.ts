import { getHeaderToken } from "@/utils/helpers/getHeaderToken";
import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

export const request = axios.create({
  baseURL: "http://localhost:3333",
});

request.interceptors.request.use((config) => {
  const token = getHeaderToken();

  if (!token) {
    return config;
  }

  config.headers.set("Authorization", `Bearer ${token}`);
  return config;
});

request.interceptors.response.use(
  (config) => {
    const token = getHeaderToken();

    if (!token) {
      return config;
    }

    return config;
  },
  (error: AxiosError) => {
    const expiredSessionError = 401;
    if (error.response?.status === expiredSessionError) {
      return redirect("/api/logout/401");
    }

    if (error.response?.status === expiredSessionError) {
      return error;
    }

    throw error;
  }
);
