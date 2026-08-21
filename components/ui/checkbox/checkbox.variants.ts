import { cva } from "class-variance-authority";

export const checkBoxVariants = cva(
  "inline-flex justify-center items-center rounded-md border transition-all duration-300 " +
    "h-4 w-4 text-xs " +
    "sm:h-5 sm:w-5 sm:text-sm " +
    "lg:h-6 lg:w-6 lg:text-base",
  {
    variants: {
      checked: {
        true: "border-none bg-primary-500",
        false: "border-secondary-300 bg-white",
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
);
