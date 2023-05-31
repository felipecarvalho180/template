import { headers } from "next/headers";

const BASE_URL = "http://localhost:3000/api";

interface Response<T> {
  data: T;
}

export const api = {
  get: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const currentHeaders = headers();

    const res = await fetch(`${BASE_URL}/${input}`, {
      ...init,
      headers: currentHeaders,
    });
    const data = await res.json();
    return data as T;
  },
  post: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const currentHeaders = headers();

    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      headers: currentHeaders,
      method: "POST",
    });
    console.log(res);
    const { data } = await res.json();
    return data as T;
  },
  put: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const currentHeaders = headers();

    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      headers: currentHeaders,
      method: "PUT",
    });
    const data = await res.json();
    return data as T;
  },
  patch: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const currentHeaders = headers();

    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      headers: currentHeaders,
      method: "PATCH",
    });
    const data = await res.json();
    return data as T;
  },
  delete: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const currentHeaders = headers();

    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      headers: currentHeaders,
      method: "DELETE",
    });
    const data = await res.json();
    return data as T;
  },
};
