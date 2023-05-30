import { sleep } from "@/utils/helpers/sleep";

const mockApi = [
  {
    id: 1,
    name: "Mock name",
    description:
      "Mollit do reprehenderit tempor pariatur. Proident duis nulla exercitation mollit nostrud. Sit eu incididunt dolore tempor do commodo nisi fugiat fugiat velit incididunt pariatur adipisicing ex ut.",
  },
  {
    id: 2,
    name: "Mock name 2",
    description:
      "Duis laboris duis officia voluptate nostrud dolor ipsum proident esse exercitation dolor veniam. Aliquip adipisicing amet eu ad mollit anim mollit incididunt do est officia.",
  },
];

export const getMemories = async () => {
  await sleep(1500);
  return mockApi;
};
