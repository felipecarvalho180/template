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

    if (res.ok) {
      const data = await res.json();
      return data as T;
    }

    throw res;
  },
  post: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const currentHeaders = headers();

    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      headers: currentHeaders,
      method: "POST",
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
  put: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const currentHeaders = headers();

    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      headers: currentHeaders,
      method: "PUT",
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
  patch: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const currentHeaders = headers();

    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      headers: currentHeaders,
      method: "PATCH",
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
  delete: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const currentHeaders = headers();

    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      headers: currentHeaders,
      method: "DELETE",
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
};
