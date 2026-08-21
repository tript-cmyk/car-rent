import { cva } from "class-variance-authority";

export const radioWrapperVariants = cva(
  "flex flex-wrap gap-x-2 gap-y-1 text-xs sm:gap-x-3 sm:text-sm lg:gap-x-4 lg:text-base",
  {
    variants: {
      direction: {
        horizontal: "flex-row items-center",
        vertical: "flex-col items-start",
      },
    },
    defaultVariants: {
      direction: "horizontal",
    },
  },
);

export const radioCircleVariants = cva(
  "inline-flex items-center justify-center rounded-full border transition-all duration-300 " +
    "h-4 w-4 " +
    "sm:h-5 sm:w-5 " +
    "lg:h-6 lg:w-6",
  {
    variants: {
      checked: {
        true: "border-none bg-primary/30",
        false: "border-secondary-300 bg-white",
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
);
