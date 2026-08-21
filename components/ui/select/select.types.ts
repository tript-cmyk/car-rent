import type { ReactNode } from "react";

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
  label?: ReactNode;
  id?: string;
  name?: string;
  title?: string;
  required?: boolean;
}
