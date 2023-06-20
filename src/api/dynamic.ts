import { User, authOptions } from "@/server/authOptions";
import { AuthOptions, getServerSession } from "next-auth";

const BASE_URL = `${process.env.internalUrl}/api`;

export const dynamicApi = {
  get: async <T = any>(input: RequestInfo, init?: RequestInit) => {
    const session = await getServerSession<AuthOptions, User>(authOptions);

    const res = await fetch(`${BASE_URL}/${input}`, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Bearer ${session?.user?.access_token}`,
      },
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
