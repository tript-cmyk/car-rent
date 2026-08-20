export interface SliderProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  id?: string;
  name?: string;
  title?: string;
  onValueChange?: (value: number) => void;
}
