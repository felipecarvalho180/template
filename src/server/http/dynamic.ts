import axios, { InternalAxiosRequestConfig } from "axios";
import { AuthOptions, getServerSession } from "next-auth";
import { User, authOptions } from "../authOptions";

export const dynamic = "force-dynamic";

export const dynamicRequest = axios.create({
  baseURL: process.env.baseUrl,
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
