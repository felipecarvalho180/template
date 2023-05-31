import { getHeaderToken } from "@/utils/helpers/getHeaderToken";
import axios, { InternalAxiosRequestConfig } from "axios";

export const request = axios.create({
  baseURL: "http://localhost:3333",
});

const addHeaders = (config: InternalAxiosRequestConfig) => {
  const token = getHeaderToken();

  if (!token) {
    return config;
  }

  config.headers.set("Authorization", `Bearer ${token}`);
  return config;
};

request.interceptors.request.use(addHeaders);
