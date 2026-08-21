"use client";

import { useState } from "react";
import { inputWrapperVariants, inputFieldVariants } from "../input.variants";
import {
  INPUT_STATUS,
  INPUT_TYPES,
  TYPE_HAS_AUTO_ICON,
} from "../input.constants";

import {
  getStatusIndicator,
  shouldShowRightIcon,
  resolveInputType,
  resolveHtmlType,
  renderIcon,
} from "../input.utils";
import type { InputProps } from "../input.types";
import { InputTypeIcon } from "./InputTypeIcon";
import { InputPasswordToggle } from "./InputPasswordToggle";

const InputField = ({
  status = INPUT_STATUS.DEFAULT,
  disabled = false,
  readOnly = false,
  leftIcon,
  rightIcon,
  actionSlot,
  id,
  name,
  type,
  placeholder,
  value,
  defaultValue,
  onValueChange,
}: InputProps) => {
  const isPassword = type === INPUT_TYPES.PASSWORD;
  const [showPassword, setShowPassword] = useState(false);

  const statusIndicator = getStatusIndicator(status);
  const showRightIcon = shouldShowRightIcon(status, rightIcon);

  const htmlType = resolveHtmlType(type, isPassword, showPassword);

  const hasAutoLeftIcon =
    !leftIcon && TYPE_HAS_AUTO_ICON.has(htmlType as INPUT_TYPES);

  return (
    <div
      className={inputWrapperVariants({
        status,
        disabled,
        hasActionSlot: !!actionSlot,
      })}
    >
      {leftIcon
        ? renderIcon(leftIcon)
        : hasAutoLeftIcon
          ? renderIcon(<InputTypeIcon type={type} />)
          : null}

      <input
        id={id}
        name={name}
        type={htmlType}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onValueChange?.(e.target.value)}
        className={inputFieldVariants()}
      />

      {statusIndicator && <span className="shrink-0">{statusIndicator}</span>}

      {showRightIcon && renderIcon(rightIcon)}

      {isPassword && (
        <InputPasswordToggle
          show={showPassword}
          onToggle={() => setShowPassword((prev) => !prev)}
        />
      )}

      {actionSlot && <span className="ml-auto shrink-0">{actionSlot}</span>}
    </div>
  );
};

export default InputField;
