"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import {
  selectTriggerVariants,
  selectDropdownVariants,
  selectOptionVariants,
} from "./select.variants";
import { SELECT_SIZES } from "./select.constants";
import { SelectProps } from "./select.types";
import { resolveSelectedLabel } from "./select.utils";

const Select = ({
  value,
  defaultValue,
  onValueChange,
  options = [],
  placeholder = "Select your option",
  disabled = false,
  size = SELECT_SIZES.MEDIUM,
  label,
  id,
  name,
  title,
  required,
}: SelectProps) => {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = useState<string | undefined>(
    defaultValue,
  );
  const currentValue = isControlled ? value : localValue;

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    if (!isControlled) setLocalValue(optionValue);
    onValueChange?.(optionValue);
    setOpen(false);
  };

  const selectedLabel = resolveSelectedLabel(options, currentValue);

  return (
    <div
      ref={containerRef}
      id={id}
      title={title}
      className="relative w-full text-left"
    >
      <input
        type="hidden"
        name={name}
        value={currentValue ?? ""}
        required={required}
      />

      {label && (
        <span className="mb-1.5 block text-[16px] font-semibold text-secondary-500 select-none">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((prev) => !prev)}
        className={cn(selectTriggerVariants({ size, open, disabled }))}
      >
        <span className={cn("truncate", !currentValue && "text-secondary-400")}>
          {selectedLabel ?? placeholder}
        </span>

        <IoChevronDownOutline
          className={cn(
            "shrink-0 text-secondary-400 transition-transform duration-200 size-4",
            open && "rotate-180",
          )}
        />
      </button>

      <div className={cn(selectDropdownVariants({ open }))}>
        <ul className="max-h-60 overflow-y-auto py-1">
          {options.map((option) => {
            const isSelected = currentValue === option.value;
            return (
              <li
                key={option.value}
                onClick={() => !option.disabled && handleSelect(option.value)}
                className={cn(
                  selectOptionVariants({
                    selected: isSelected,
                    disabled: !!option.disabled,
                  }),
                )}
              >
                <span className="flex-1 truncate">{option.label}</span>
                {isSelected && (
                  <IoCheckmarkOutline className="ml-2 shrink-0 size-4 text-primary-500" />
                )}
              </li>
            );
          })}

          {options.length === 0 && (
            <li className="px-4 py-2 text-sm text-secondary-400 select-none">
              No options available
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Select;
