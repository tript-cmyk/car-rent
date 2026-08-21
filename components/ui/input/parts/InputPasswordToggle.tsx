import { LuEye, LuEyeOff } from "react-icons/lu";

interface InputPasswordToggleProps {
  show: boolean;
  onToggle: () => void;
}

export const InputPasswordToggle = ({
  show,
  onToggle,
}: InputPasswordToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    className="shrink-0 cursor-pointer text-secondary-400 transition-colors duration-200 hover:text-secondary-600"
  >
    {show ? <LuEyeOff /> : <LuEye />}
  </button>
);
