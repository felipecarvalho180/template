import { tv } from "tailwind-variants";

export const button = tv({
  base: "w-full h-11 text-lg text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition duration-150",
  variants: {
    bg: {
      headerLinks: "bg-indigo-500 hover:bg-indigo-400",
    },
  },
});
