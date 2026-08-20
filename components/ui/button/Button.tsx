"use client";

import { cn } from "@/lib/utils";
import { buttonVariants, iconButtonVariants } from "./button.variants";
import { ButtonProps } from "./button.types";
import { showIconLeft, showIconRight } from "./button.utils";
import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  ICON_POSITION,
} from "./button.constants";

const Button = ({
  size = BUTTON_SIZES.MEDIUM,
  variant = BUTTON_VARIANTS.PRIMARY,
  disabled = false,
  icon,
  iconPosition = ICON_POSITION.RIGHT,
  iconOnly = false,
  onClick,
  children = "Button",
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        buttonVariants({ variant, size, iconOnly }),
        iconOnly && "aspect-square",
      )}
      onClick={() => onClick?.()}
    >
      {showIconLeft(icon, iconPosition) && (
        <span className={iconButtonVariants({ size })}>{icon}</span>
      )}

      {!iconOnly && children}

      {showIconRight(icon, iconPosition) && (
        <span className={iconButtonVariants({ size })}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
