import { tv } from "tailwind-variants";

export const input = tv({
  slots: {
    base: "bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-indigo-500 focus:border-indigo-500 outline-none text-gray-700 opacity-70 disabled:cursor-not-allowed h-10",
    label: "text-sm text-gray-700 block mb-1 font-medium ml-2",
    error: "text-xs text-red-700 block mb-1 font-medium mt-1.5 ml-2",
  },
});
