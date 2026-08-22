import { cva } from "class-variance-authority";

export const promoBannerVariants = cva(
  "flex w-full max-w-160 flex-col items-start justify-between gap-6 overflow-hidden rounded-lg p-5 text-white " +
    "sm:flex-row sm:items-center sm:gap-4 sm:p-6 lg:gap-8",
  {
    variants: {
      variant: {
        lightBlue: "bg-information-500",
        deepBlue: "bg-primary-500",
      },
    },
    defaultVariants: {
      variant: "lightBlue",
    },
  },
);
