import {
  LuMail,
  LuSearch,
  LuPhone,
  LuLink,
  LuCalendar,
  LuClock,
} from "react-icons/lu";
import { INPUT_TYPES } from "../input.constants";
import { InputTypeIconProps } from "../input.types";

export const InputTypeIcon = ({ type }: InputTypeIconProps) => {
  switch (type) {
    case INPUT_TYPES.EMAIL:
      return <LuMail />;
    case INPUT_TYPES.SEARCH:
      return <LuSearch />;
    case INPUT_TYPES.TEL:
      return <LuPhone />;
    case INPUT_TYPES.URL:
      return <LuLink />;
    case INPUT_TYPES.DATE:
      return <LuCalendar />;
    case INPUT_TYPES.TIME:
      return <LuClock />;
    default:
      return null;
  }
};
