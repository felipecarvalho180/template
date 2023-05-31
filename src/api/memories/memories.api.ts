import { api } from "..";
import { apiErrorHandler } from "@/utils/helpers/errorHandler";

export const getMemories = async () => {
  try {
    const result = await api.get("memories", {
      cache: "no-cache",
    });

    return result;
  } catch (error) {
    apiErrorHandler(error);
  }
};
