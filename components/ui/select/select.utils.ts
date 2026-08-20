import type { SelectOption } from "./select.types";

export const resolveSelectedLabel = (
  options: SelectOption[] | undefined,
  value: string | undefined,
): React.ReactNode | undefined => {
  if (value === undefined || !options) return undefined;
  return options.find((o) => o.value === value)?.label;
};
