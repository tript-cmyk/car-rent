"use client";

import * as React from "react";
import { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { checkBoxVariants } from "./checkbox.variants";
import { CheckBoxProps } from "./checkbox.types";
import { useCheckBoxGroup } from "./checkbox.context";
import { resolveChecked } from "./checkbox.utils";
import { cn } from "@/lib/utils";

const CheckBox = ({
  label,
  id,
  checked: checkedProp,
  defaultChecked = false,
  disabled: disabledProp = false,
  onChange,
  value,
  name: nameProp,
  title,
  required,
}: CheckBoxProps) => {
  const groupContext = useCheckBoxGroup();

  const isControlled = checkedProp !== undefined;
  const isGrouped = !!groupContext;
  const [localChecked, setLocalChecked] = useState(defaultChecked);

  const checked = resolveChecked({
    checked: localChecked,
    checkedProp,
    isControlled,
    value,
    groupValues: groupContext?.values,
  });

  const disabled = !!groupContext?.disabled || disabledProp;
  const name = groupContext?.name || nameProp;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled && !isGrouped) {
      setLocalChecked(event.target.checked);
    }

    if (isGrouped && value !== undefined) {
      groupContext.toggle(value, event.target.checked);
    }

    onChange?.(event);
  };

  return (
    <div className="inline-flex items-center">
      <label
        className={cn(
          "group inline-flex items-center gap-2 select-none",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        )}
      >
        <input
          id={id}
          type="checkbox"
          className="sr-only"
          checked={checked}
          disabled={disabled}
          name={name}
          value={value}
          title={title}
          required={required}
          onChange={handleChange}
        />
        <span className={cn(checkBoxVariants({ checked }))}>
          {checked && (
            <IoCheckmarkOutline className="text-white h-full w-full p-px" />
          )}
        </span>

        {label && (
          <span className="font-medium text-secondary-400 select-none">
            {label}
          </span>
        )}
      </label>
    </div>
  );
};

export default CheckBox;
