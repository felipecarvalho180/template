import axios from "axios";

export const staticRequest = axios.create({
  baseURL: process.env.baseUrl,
});
