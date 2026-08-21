import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold cursor-pointer rounded-sm " +
    "px-4 py-1.5 text-sm sm:py-2 lg:px-6 lg:py-3 lg:text-base " +
    "disabled:pointer-events-none disabled:opacity-30 " +
    "transition-colors duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white " +
          "hover:bg-primary-600 " +
          "active:bg-primary-700 " +
          "focus-visible:ring-[#CEBEFE]",

        secondary:
          "bg-white text-secondary-500 border border-secondary-300 " +
          "hover:border-secondary-500 " +
          "active:bg-primary-100 active:border-secondary-300 " +
          "focus-visible:ring-secondary-300",

        minimal:
          "bg-transparent text-secondary-500-500 " +
          "hover:bg-secondary-100 hover:text-secondary-500 " +
          "active:bg-primary-100 active:text-secondary-500 " +
          "focus-visible:ring-secondary-200",
      },
      iconOnly: {
        true: "p-2 lg:p-3 aspect-square",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      iconOnly: false,
    },
  },
);
