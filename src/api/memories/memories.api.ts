import { cookies, headers } from "next/headers";
import { api } from "..";
import { NextRequest } from "next/server";

export const getMemories = async () => {
  const result = await api.get("memories", {
    cache: "no-cache",
  });

  return result;
};
