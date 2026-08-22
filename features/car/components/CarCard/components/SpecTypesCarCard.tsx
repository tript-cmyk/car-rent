
import { CAR_SPEC_TYPE, SPEC_ICONS } from "../car-card.constants";

interface SpecTypesCarCardProps {
  type: CAR_SPEC_TYPE;
  label: string;
}

export const SpecTypesCarCard = ({
  type,
  label,
}: SpecTypesCarCardProps) => {
  const Icon = SPEC_ICONS[type];

  return (
    <div className="flex items-center gap-1.5 text-xs font-medium leading-5 md:text-sm">
      <span className="shrink-0">
        <Icon className="size-4 md:size-5" />
      </span>

      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
};