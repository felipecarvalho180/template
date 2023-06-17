import axios, { InternalAxiosRequestConfig } from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "../authOptions";

export const request = axios.create({
  baseURL: "https://polls.apiblueprint.org",
});

const addHeaders = (config: InternalAxiosRequestConfig) => {
  const token = getServerSession(authOptions);

  if (!token) {
    return config;
  }

  config.headers.set("Authorization", `Bearer ${token}`);
  return config;
};

request.interceptors.request.use(addHeaders);
