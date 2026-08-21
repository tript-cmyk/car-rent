import type { ReactNode } from "react";
import {
  BUTTON_VARIANTS,
  ICON_POSITION,
} from "./button.constants";

export interface ButtonProps {
  variant?: BUTTON_VARIANTS;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: ICON_POSITION;
  iconOnly?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}
