import { BUTTON_VARIANTS } from "@/components/ui/button";
import { PROMO_BANNER_VARIANTS } from "./promo-banner.constants";

export const getButtonVariantPromoBanner = (variant: PROMO_BANNER_VARIANTS) => {
    return variant === PROMO_BANNER_VARIANTS.LIGHT_BLUE ? BUTTON_VARIANTS.PRIMARY : BUTTON_VARIANTS.SECONDARY;
}