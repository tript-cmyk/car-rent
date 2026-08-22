"use client";

import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { PROMO_BANNER_VARIANTS } from "./promo-banner.constants";
import { promoBannerVariants } from "./promo-banner.variants";
import { getButtonVariantPromoBanner } from "./promo-banner.utils";

interface PromoBannerProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: PROMO_BANNER_VARIANTS;
  onPromoBannerLabel?: string;
  onPromoBannerClick?: () => void;
}

const PromoBanner = ({
  title = "",
  description = "",
  imageSrc = "/images/PromoCar.png",
  imageAlt = "Promo Banner Image",
  variant = PROMO_BANNER_VARIANTS.LIGHT_BLUE,
  onPromoBannerLabel = "Rental Car",
  onPromoBannerClick,
}: PromoBannerProps) => {
  return (
    <section className={promoBannerVariants({ variant })}>
      <div className="flex w-full flex-col items-start sm:max-w-70 lg:max-w-72">
        <h2 className="text-2xl font-semibold leading-8 sm:text-3xl sm:leading-10">
          {title}
        </h2>

        <p className="mt-4 text-xs leading-5 sm:text-sm">{description}</p>

        <div className="mt-5">
          <Button
            onClick={() => onPromoBannerClick?.()}
            variant={getButtonVariantPromoBanner(variant)}
          >
            {onPromoBannerLabel}
          </Button>
        </div>
      </div>

      <div className="flex w-full justify-center sm:w-[62%] sm:justify-end">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={496}
          height={200}
          sizes="(max-width: 639px) 320px, (max-width: 1023px) 360px, 420px"
          className="h-auto w-full max-w-80 object-contain sm:max-w-90 lg:max-w-105"
        />
      </div>
    </section>
  );
};

export default PromoBanner;
