import axios, { InternalAxiosRequestConfig } from "axios";
import { AuthOptions, getServerSession } from "next-auth";
import { User, authOptions } from "../authOptions";

export const dynamicRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const addHeaders = async (config: InternalAxiosRequestConfig) => {
  const token = await getServerSession<AuthOptions, User>(authOptions);

  if (!token) {
    return config;
  }

  config.headers.set("Authorization", `Bearer ${token.user?.access_token}`);
  return config;
};

dynamicRequest.interceptors.request.use(addHeaders);

export const staticRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
