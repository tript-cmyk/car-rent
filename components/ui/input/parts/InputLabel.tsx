import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { InputLabelProps } from "../input.types";

const InputLabel = ({ label, description, required, id }: InputLabelProps) => {
  if (!label && !description) return null;

  return (
    <div className="mb-1.5 flex flex-col gap-0.5">
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "block text-[16px] font-semibold text-secondary-500 select-none",
            id && "cursor-pointer",
          )}
        >
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
      )}

      {description && (
        <span className="block text-xs text-secondary-400 select-none">
          {description}
        </span>
      )}
    </div>
  );
};

export default InputLabel;
