import { cva } from "class-variance-authority";

export const inputWrapperVariants = cva(
  "w-full inline-flex items-center gap-2 " +
    "rounded-md border-none bg-[#F6F7F9] " +
    "transition-all duration-300 " +
    "focus-within:ring-2 focus-within:ring-primary-200",

  {
    variants: {
      size: {
        small: "px-3 py-2",
        medium: "px-4 py-3",
        large: "px-4 py-3",
      },
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
      size: "medium",
      status: "default",
      disabled: false,
      hasActionSlot: false,
    },
  },
);

export const inputFieldVariants = cva(
  "flex-1 min-w-0 bg-transparent outline-none border-none " +
    "text-secondary-700 placeholder:text-secondary-400 " +
    "disabled:cursor-not-allowed " +
    "[&::-webkit-inner-spin-button]:appearance-none " +
    "[&::-webkit-search-decoration]:hidden " +
    "[&::-webkit-search-cancel-button]:hidden",
  {
    variants: {
      size: {
        small: "text-sm",
        medium: "text-sm",
        large: "text-base",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
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

export const inputIconVariants = cva(
  "shrink-0 text-secondary-400 transition-colors duration-200",
  {
    variants: {
      size: {
        small: "size-4",
        medium: "size-4",
        large: "size-5",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);
