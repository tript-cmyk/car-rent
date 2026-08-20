import type { ReactNode } from "react";
import type { SELECT_SIZES } from "./select.constants";

export interface SelectOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  size?: SELECT_SIZES;
  label?: ReactNode;
  id?: string;
  name?: string;
  title?: string;
  required?: boolean;
}
