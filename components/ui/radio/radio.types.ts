import type { ReactNode } from "react";
import type { RADIO_DIRECTION } from "./radio.constants";

export interface RadioOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface RadioProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options?: RadioOption[];
  direction?: RADIO_DIRECTION;
  name?: string;
  disabled?: boolean;
  id?: string;
  title?: string;
  required?: boolean;
}
