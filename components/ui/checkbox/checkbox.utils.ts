export const resolveChecked = ({
  checked,
  checkedProp,
  isControlled,
  value,
  groupValues,
}: {
  checked: boolean;
  checkedProp?: boolean;
  isControlled: boolean;
  value?: string;
  groupValues?: string[];
}) => {
  if (groupValues && value !== undefined) {
    return groupValues.includes(value);
  }

  if (isControlled) {
    return !!checkedProp;
  }

  return checked;
};
