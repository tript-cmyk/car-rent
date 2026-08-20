import { ReactNode } from "react";
import { ICON_POSITION } from "./button.constants";

export const showIconLeft = (icon: ReactNode, iconPosition: ICON_POSITION) => {
  return icon && iconPosition === ICON_POSITION.LEFT;
};

export const showIconRight = (icon: ReactNode, iconPosition: ICON_POSITION) => {
  return icon && iconPosition === ICON_POSITION.RIGHT;
};
