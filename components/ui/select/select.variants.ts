import { cva } from "class-variance-authority";

export const selectTriggerVariants = cva(
  "w-full inline-flex items-center justify-between gap-2 " +
    "rounded-md border-none bg-[#F6F7F9] text-sm text-left " +
    "px-3 py-2 sm:px-4 sm:py-3 lg:text-base " +
    "cursor-pointer select-none " +
    "transition-all duration-300 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-3",
  {
    variants: {
      open: {
        true: "border-primary-500 ring-2 ring-primary-200",
        false: "border-secondary-300 hover:border-secondary-400",
      },
      disabled: {
        true: "cursor-not-allowed opacity-40 pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      open: false,
      disabled: false,
    },
  },
);

export const selectDropdownVariants = cva(
  "absolute z-50 mt-1 w-full " +
    "rounded-md border border-secondary-200 bg-white shadow-lg " +
    "overflow-hidden " +
    "origin-top transition-all duration-200",
  {
    variants: {
      open: {
        true: "opacity-100 scale-y-100 pointer-events-auto",
        false: "opacity-0 scale-y-95 pointer-events-none",
      },
    },
    defaultVariants: {
      open: false,
    },
  },
);

export const selectOptionVariants = cva(
  "w-full flex items-center px-4 py-2 text-sm " +
    "cursor-pointer select-none " +
    "transition-colors duration-150 " +
    "hover:text-primary-500",
  {
    variants: {
      selected: {
        true: "bg-primary-50 text-primary font-semibold",
        false: "text-secondary-600 hover:bg-secondary-50",
      },
      disabled: {
        true: "cursor-not-allowed opacity-40 pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      selected: false,
      disabled: false,
    },
  },
);
