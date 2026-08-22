"use client";

import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { FaHeart } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { SpecTypesCarCard } from "./components/SpecTypesCarCard";
import { CAR_SPEC_TYPE } from "./car-card.constants";
import { formatPrice, getDiscountedPrice } from "./car-card.utils";

interface CarSpec {
  type: CAR_SPEC_TYPE;
  label: string;
}

interface CarCardProps {
  name?: string;
  type?: string;
  imageSrc?: string;
  specs?: CarSpec[];
  price?: number;
  period?: string;
  discount?: number;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
  ctaLabel?: string;
  onRentClick?: () => void;
}

const CarCard = ({
  name = "Car Name",
  type = "SUV",
  imageSrc = "/images/Car.png",
  specs = [
    {
      type: CAR_SPEC_TYPE.CAPACITY,
      label: "80L",
    },
    {
      type: CAR_SPEC_TYPE.TRANSMISSION,
      label: "Manual",
    },
    {
      type: CAR_SPEC_TYPE.PEOPLE,
      label: "6 People",
    },
  ],
  price = 80,
  period = "day",
  discount,
  onFavoriteClick,
  isFavorite = false,
  ctaLabel = "Rent Now",
  onRentClick,
}: CarCardProps) => {
  return (
    <article className="w-full max-w-81.75 rounded-lg bg-white p-4 md:max-w-76 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold leading-6 text-secondary-500 md:text-xl">
            {name}
          </h3>

          <p className="text-xs font-bold leading-5 text-secondary-300 md:text-sm">
            {type}
          </p>
        </div>

        <FaHeart
          onClick={() => onFavoriteClick?.()}
          className={cn(
            "mt-1 size-4 shrink-0 md:size-5",
            isFavorite ? "text-error-500" : "text-secondary-300",
          )}
        />
      </div>

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-5 md:mt-16 md:block">
        <div className="relative flex min-h-18 items-center md:min-h-25 md:justify-center">
          <Image
            src={imageSrc}
            alt={`${name} car`}
            width={248}
            height={100}
            sizes="(max-width: 767px) 180px, 248px"
            className="h-auto w-full max-w-45 object-contain md:max-w-62"
          />
        </div>

        <div className="flex flex-col gap-4 text-secondary-300 md:mt-10 md:flex-row md:items-center md:justify-between md:gap-3">
          {specs.map((spec) => (
            <SpecTypesCarCard
              key={spec.type}
              type={spec.type}
              label={spec.label}
            />
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-end justify-between gap-4 md:mt-6">
        <div className="flex flex-col gap-2">
          <p className="flex items-baseline text-xl font-bold leading-none text-secondary-500">
            {getDiscountedPrice(price, discount)} /
            <span className="ml-1 text-xs font-bold leading-5 text-secondary-300 md:text-sm">
              {period}
            </span>
          </p>
          <div>
            {discount !== undefined && discount > 0 && (
              <p className="text-sm font-bold text-secondary-300 line-through">
                {formatPrice(price)}
              </p>
            )}
          </div>
        </div>

        <Button onClick={() => onRentClick?.()}>{ctaLabel}</Button>
      </div>
    </article>
  );
};

export default CarCard;
