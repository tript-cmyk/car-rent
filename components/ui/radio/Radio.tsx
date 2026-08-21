"use client";

import * as React from "react";
import { useState } from "react";
import { radioCircleVariants, radioWrapperVariants } from "./radio.variants";
import { RADIO_DIRECTION } from "./radio.constants";
import { RadioProps } from "./radio.types";
import { cn } from "@/lib/utils";

const Radio = ({
  value,
  defaultValue,
  onValueChange,
  options = [],
  direction = RADIO_DIRECTION.HORIZONTAL,
  name,
  disabled = false,
  id,
  title,
  required,
}: RadioProps) => {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = useState(defaultValue);
  const currentValue = isControlled ? value : localValue;

  const handleChange = (
    nextValue: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.checked) return;
    if (!isControlled) setLocalValue(nextValue);
    onValueChange?.(nextValue);
  };

  return (
    <div id={id} title={title} className="flex w-full flex-col gap-2 text-left">
      <div className={radioWrapperVariants({ direction })}>
        {options.map((option) => {
          const optionDisabled = disabled || !!option.disabled;
          const checked = currentValue === option.value;

          return (
            <label
              key={option.value}
              className={cn(
                "group inline-flex items-center gap-1.5 select-none",
                optionDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer",
              )}
            >
              <input
                type="radio"
                className="sr-only"
                name={name}
                value={option.value}
                checked={checked}
                disabled={optionDisabled}
                required={required}
                onChange={(event) => handleChange(option.value, event)}
              />

              <span
                className={radioCircleVariants({
                  checked,
                })}
              >
                {checked && (
                  <span className="h-2 w-2 rounded-full bg-information sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3" />
                )}
              </span>

              <span className="min-w-0">{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
