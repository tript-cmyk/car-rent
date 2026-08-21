import { cva } from "class-variance-authority";

export const inputWrapperVariants = cva(
  "w-full inline-flex items-center gap-2 " +
    "rounded-md border-none bg-[#F6F7F9] " +
    "px-3 py-2 sm:px-4 sm:py-3 " +
    "transition-all duration-300 " +
    "focus-within:ring-2 focus-within:ring-primary-200",

  {
    variants: {
      status: {
        default: "focus-within:ring-primary-200",
        success: "ring-2 ring-green-100 focus-within:ring-green-200",
        error: "ring-2 ring-red-100 focus-within:ring-red-200",
        processing: "opacity-70 focus-within:ring-primary-200",
      },
      disabled: {
        true: "cursor-not-allowed opacity-40 pointer-events-none",
        false: "",
      },
      hasActionSlot: {
        true: "pr-1.5",
        false: "",
      },
    },
    defaultVariants: {
      status: "default",
      disabled: false,
      hasActionSlot: false,
    },
  },
);

export const inputFieldVariants = cva(
  "flex-1 min-w-0 bg-transparent outline-none border-none " +
    "text-sm lg:text-base " +
    "text-secondary-700 placeholder:text-secondary-400 " +
    "disabled:cursor-not-allowed " +
    "[&::-webkit-inner-spin-button]:appearance-none " +
    "[&::-webkit-search-decoration]:hidden " +
    "[&::-webkit-search-cancel-button]:hidden",
);

export const inputHelperVariants = cva(
  "mt-1.5 flex items-center gap-1.5 text-xs select-none",
  {
    variants: {
      status: {
        default: "text-secondary-400",
        success: "text-green-600",
        error: "text-red-500",
        processing: "text-secondary-400",
      },
    },
    defaultVariants: {
      status: "default",
    },
  },
);
