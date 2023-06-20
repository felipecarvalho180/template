import { dynamicApi } from "../dynamic";
import { staticApi } from "../static";

export const getUsers = async (init?: RequestInit) => {
  try {
    const result = await dynamicApi.get("users", init);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getUsersStatic = async (init?: RequestInit) => {
  try {
    const result = await staticApi.get("users", init);

    return result;
  } catch (error) {
    console.error(error);
  }
};
