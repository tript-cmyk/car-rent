import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold cursor-pointer rounded-sm " +
    "disabled:pointer-events-none disabled:opacity-30 " +
    "transition-colors duration-300",
  {
    variants: {
      size: {
        small: "px-4 py-1.25 text-sm",
        medium: "px-4 py-2 text-sm",
        large: "px-6 py-3 text-base",
      },
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
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        size: "small",
        iconOnly: true,
        className: "p-2",
      },
      {
        size: "medium",
        iconOnly: true,
        className: "p-2",
      },
      {
        size: "large",
        iconOnly: true,
        className: "p-3",
      },
    ],
    defaultVariants: {
      size: "medium",
      variant: "primary",
      iconOnly: false,
    },
  },
);

export const iconButtonVariants = cva("shrink-0 [&>svg]:size-full", {
  variants: {
    size: {
      small: "size-4",
      medium: "size-5",
      large: "size-5",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
