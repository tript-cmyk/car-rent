import type { ReactNode } from "react";
import { GoAlertFill } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { LuLoader } from "react-icons/lu";
import { INPUT_STATUS, INPUT_TYPES } from "./input.constants";

export const getStatusIndicator = (
  status: INPUT_STATUS | undefined,
): ReactNode => {
  switch (status) {
    case INPUT_STATUS.SUCCESS:
      return <IoIosCheckmarkCircle className="size-4 text-green-500" />;
    case INPUT_STATUS.ERROR:
      return <GoAlertFill className="size-4 text-red-500" />;
    case INPUT_STATUS.PROCESSING:
      return <LuLoader className="size-4 animate-spin text-secondary-400" />;
    default:
      return null;
  }
};

export const shouldShowRightIcon = (
  status: INPUT_STATUS | undefined,
  rightIcon: ReactNode,
): boolean => {
  if (!rightIcon) return false;
  const statusHidesIcon =
    status === INPUT_STATUS.SUCCESS ||
    status === INPUT_STATUS.ERROR ||
    status === INPUT_STATUS.PROCESSING;
  return !statusHidesIcon;
};

export const resolveHelperText = (
  status: INPUT_STATUS | undefined,
  helperText: ReactNode,
): ReactNode => {
  if (helperText) return helperText;
  switch (status) {
    case INPUT_STATUS.SUCCESS:
      return "Success";
    case INPUT_STATUS.ERROR:
      return "Error";
    case INPUT_STATUS.PROCESSING:
      return "Processing...";
    default:
      return "";
  }
};

export const resolveInputType = (
  type: INPUT_TYPES | undefined,
): INPUT_TYPES => {
  return type ?? INPUT_TYPES.TEXT;
};

export const HelperIcon = ({ status }: { status: INPUT_STATUS }): ReactNode => {
  switch (status) {
    case INPUT_STATUS.SUCCESS:
      return <IoIosCheckmarkCircle className="size-3.5 shrink-0" />;
    case INPUT_STATUS.ERROR:
      return <GoAlertFill className="size-3.5 shrink-0" />;
    case INPUT_STATUS.PROCESSING:
      return <LuLoader className="size-3.5 shrink-0 animate-spin" />;
    default:
      return null;
  }
};

export const resolveHtmlType = (
  type: INPUT_TYPES | undefined,
  isPassword: boolean,
  showPassword: boolean,
): INPUT_TYPES => {
  return isPassword
    ? showPassword
      ? INPUT_TYPES.TEXT
      : INPUT_TYPES.PASSWORD
    : resolveInputType(type);
};

export const renderIcon = (icon: ReactNode) => {
  return (
    <span className="shrink-0 text-secondary-400 transition-colors duration-200 size-4 lg:size-5">
      {icon}
    </span>
  );
};
