"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button.variants";
import { ButtonProps } from "./button.types";
import { showIconLeft, showIconRight } from "./button.utils";
import { BUTTON_VARIANTS, ICON_POSITION } from "./button.constants";
import { ReactNode } from "react";

const renderIcon = (icon: ReactNode) => {
  return (
    <span className="shrink-0 [&>svg]:size-full size-4 sm:size-5">{icon}</span>
  );
};

const Button = ({
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
      className={cn(buttonVariants({ variant, iconOnly }))}
      onClick={() => onClick?.()}
    >
      {showIconLeft(icon, iconPosition) && renderIcon(icon)}

      {!iconOnly && children}

      {showIconRight(icon, iconPosition) && renderIcon(icon)}
    </button>
  );
};

export default Button;
