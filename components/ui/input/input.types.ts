import type { ReactNode } from "react";
import type { INPUT_STATUS, INPUT_TYPES } from "./input.constants";


export interface InputProps {
  value?: string | number;
  defaultValue?: string | number;
  onValueChange?: (value: string) => void;
  label?: ReactNode;
  description?: ReactNode;
  helperText?: ReactNode;
  required?: boolean;
  type?: INPUT_TYPES;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  actionSlot?: ReactNode;
  status?: INPUT_STATUS;
  disabled?: boolean;
  readOnly?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
}

export interface InputLabelProps {
  label?: ReactNode;
  description?: ReactNode;
  required?: boolean;
  id?: string;
}

export interface InputHelperProps {
  status?: INPUT_STATUS;
  helperText?: ReactNode;
}

export interface InputTypeIconProps {
  type: INPUT_TYPES | undefined;
}
