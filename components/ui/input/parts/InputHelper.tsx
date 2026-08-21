import { cn } from "@/lib/utils";
import { inputHelperVariants } from "../input.variants";
import { INPUT_STATUS } from "../input.constants";
import { HelperIcon } from "../input.utils";
import { InputHelperProps } from "../input.types";

const InputHelper = ({
  status = INPUT_STATUS.DEFAULT,
  helperText,
}: InputHelperProps) => {
  if (!helperText) return null;

  return (
    <p className={cn(inputHelperVariants({ status }))}>
      {status !== INPUT_STATUS.DEFAULT && <HelperIcon status={status} />}
      {helperText}
    </p>
  );
};

export default InputHelper;
