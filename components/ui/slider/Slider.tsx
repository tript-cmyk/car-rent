"use client";

import { useMemo, useState, type CSSProperties } from "react";

import type { SliderProps } from "./slider.types";
import {
  SLIDER_DEFAULT_MAX_VALUE,
  SLIDER_DEFAULT_MIN_VALUE,
  SLIDER_DEFAULT_STEP,
} from "./slider.constants";
import {
  getBoundedSliderValue,
  getInitialSliderValue,
  getSliderPercentage,
} from "./slider.utils";
import { cn } from "@/lib/utils";

const Slider = ({
  value,
  defaultValue,
  min = SLIDER_DEFAULT_MIN_VALUE,
  max = SLIDER_DEFAULT_MAX_VALUE,
  step = SLIDER_DEFAULT_STEP,
  disabled = false,
  id,
  name,
  title,
  onValueChange,
}: SliderProps) => {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = useState(
    getInitialSliderValue(value, defaultValue, min, max),
  );
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);

  const currentValue = getBoundedSliderValue(
    isControlled ? value : localValue,
    min,
    max,
  );

  const percentage = useMemo(
    () => getSliderPercentage(currentValue, min, max),
    [currentValue, min, max],
  );

  const handleChange = (nextValue: number) => {
    const boundedValue = getBoundedSliderValue(nextValue, min, max);

    if (!isControlled) {
      setLocalValue(boundedValue);
    }

    onValueChange?.(boundedValue);
  };

  return (
    <div className="relative min-w-0 py-2 w-full sm:w-80 lg:w-120">
      <div className="relative w-full min-w-28 select-none h-6 sm:h-7 lg:h-8">
        {/* Track background */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-secondary-400 rounded-full h-2 sm:h-3 lg:h-3.5" />
        {/* Track fill */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary rounded-full h-2 sm:h-3 lg:h-3.5"
          style={{ width: `${percentage}%` }}
        />
        {/* Thumb */}
        <span
          className={cn(
            "absolute top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-primary text-white font-bold leading-none shadow-sm transition-colors",
            "h-5 w-5 text-[9px] sm:h-6 sm:w-6 sm:text-[10px] lg:h-7 lg:w-7 lg:text-xs",
            disabled && "opacity-50",
          )}
          style={
            {
              left: `clamp(10px, ${percentage}%, calc(100% - 10px))`,
            } as CSSProperties
          }
        />
        <input
          id={id}
          name={name}
          title={title}
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          disabled={disabled}
          className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
          onChange={(event) => handleChange(Number(event.target.value))}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onPointerDown={() => setDragging(true)}
          onPointerUp={() => setDragging(false)}
          onPointerCancel={() => setDragging(false)}
        />
      </div>
    </div>
  );
};

export default Slider;
