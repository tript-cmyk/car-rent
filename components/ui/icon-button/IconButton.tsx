"use client";

import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  badge?: boolean;
  className?: string;
  disabled?: boolean;
}

const IconButton = ({
  icon,
  label,
  onClick,
  badge = false,
  disabled = false,
}: IconButtonProps) => {
  return (
    <button
      type="button"
      title={label}
      disabled={disabled}
      onClick={() => onClick?.()}
      className="relative inline-flex items-center justify-center rounded-full cursor-pointer size-8 [&>svg]:size-4 md:size-10 md:[&>svg]:size-5 text-secondary-400 border border-secondary-200 bg-white hover:bg-secondary-100 hover:text-secondary-600 active:bg-secondary-200 disabled:pointer-events-none disabled:opacity-30 transition-colors duration-300 "
    >
      {icon}

      {badge && (
        <span
          aria-hidden="true"
          className="absolute top-2 right-2 size-2 rounded-full bg-red-500 ring-1 ring-white"
        />
      )}
    </button>
  );
};

export default IconButton;
