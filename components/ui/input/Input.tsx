"use client";

import { useState, useCallback } from "react";
import { INPUT_SIZES, INPUT_STATUS, INPUT_TYPES } from "./input.constants";
import { InputProps } from "./input.types";
import { resolveHelperText } from "./input.utils";
import InputLabel from "./parts/InputLabel";
import InputField from "./parts/InputField";
import InputHelper from "./parts/InputHelper";

const Input = ({
  value,
  defaultValue,
  onValueChange,
  size = INPUT_SIZES.MEDIUM,
  label,
  description,
  helperText,
  required,
  type = INPUT_TYPES.TEXT,
  leftIcon,
  rightIcon,
  actionSlot,
  status = INPUT_STATUS.DEFAULT,
  disabled = false,
  readOnly = false,
  id,
  name,
  placeholder,
}: InputProps) => {
  const isControlled = value !== undefined;

  const [localValue, setLocalValue] = useState<string | number>(
    defaultValue ?? "",
  );

  const handleChange = useCallback(
    (newValue: string) => {
      if (!isControlled) setLocalValue(newValue);
      onValueChange?.(newValue);
    },
    [isControlled, onValueChange],
  );

  const resolvedHelperText = resolveHelperText(status, helperText);

  return (
    <div className="w-full text-left">
      <InputLabel
        label={label}
        description={description}
        required={required}
        id={id}
      />

      <InputField
        size={size}
        status={status}
        disabled={disabled}
        readOnly={readOnly}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        actionSlot={actionSlot}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={isControlled ? value : undefined}
        defaultValue={!isControlled ? localValue : undefined}
        onValueChange={handleChange}
      />

      <InputHelper status={status} helperText={resolvedHelperText} />
    </div>
  );
};

export default Input;
