import {
  SLIDER_DEFAULT_MAX_VALUE,
  SLIDER_DEFAULT_MIN_VALUE,
} from "./slider.constants";

export const getBoundedSliderValue = (
  value: number,
  min = SLIDER_DEFAULT_MIN_VALUE,
  max = SLIDER_DEFAULT_MAX_VALUE,
) => Math.min(Math.max(value, min), max);

export const getSliderPercentage = (
  value: number,
  min = SLIDER_DEFAULT_MIN_VALUE,
  max = SLIDER_DEFAULT_MAX_VALUE,
) => {
  if (max <= min) {
    return 0;
  }

  return ((getBoundedSliderValue(value, min, max) - min) / (max - min)) * 100;
};

export const getInitialSliderValue = (
  value?: number,
  defaultValue?: number,
  min = SLIDER_DEFAULT_MIN_VALUE,
  max = SLIDER_DEFAULT_MAX_VALUE,
) => {
  if (value !== undefined) {
    return getBoundedSliderValue(value, min, max);
  }

  if (defaultValue !== undefined) {
    return getBoundedSliderValue(defaultValue, min, max);
  }

  return min;
};
