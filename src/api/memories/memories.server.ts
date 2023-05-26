import { request } from "..";

export const getMemories = async () => {
  const { data } = await request.get("/memories");

  return data;
};
