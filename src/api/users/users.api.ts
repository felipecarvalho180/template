import { api } from "..";
import { apiErrorHandler } from "@/utils/helpers/errorHandler";

export const getUsers = async () => {
  try {
    const result = await api.get("/users");

    return result;
  } catch (error) {
    console.error(error);
  }
};
