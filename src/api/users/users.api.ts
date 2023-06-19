import { api } from "..";

export const getUsers = async (init?: RequestInit) => {
  try {
    const result = await api.get("users", init);

    return result;
  } catch (error) {
    console.error(error);
  }
};
