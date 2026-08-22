import { IconType } from "react-icons";
import { FaGasPump } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { PiSteeringWheelFill } from "react-icons/pi";

export enum CAR_SPEC_TYPE {
  CAPACITY = "capacity",
  TRANSMISSION = "transmission",
  PEOPLE = "people",
}

export const SPEC_ICONS: Record<CAR_SPEC_TYPE, IconType> = {
  [CAR_SPEC_TYPE.CAPACITY]: FaGasPump,
  [CAR_SPEC_TYPE.TRANSMISSION]: PiSteeringWheelFill,
  [CAR_SPEC_TYPE.PEOPLE]: HiUsers,
};
