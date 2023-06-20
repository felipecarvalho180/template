import { headers } from "next/headers";

const BASE_URL = "http://127.0.0.1:3000/api";

export const dynamicApi = {
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
    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,

      method: "POST",
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
  put: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      method: "PUT",
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
  patch: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      method: "PATCH",
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
  delete: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const res = await fetch(`${BASE_URL}${input}`, {
      ...init,
      method: "DELETE",
    });

    if (res.ok) {
      const { data } = await res.json();
      return data as T;
    }

    throw res;
  },
};
