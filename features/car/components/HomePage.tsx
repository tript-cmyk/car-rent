import CarCard from "./CarCard/CarCard";
import PromoBanner, { PROMO_BANNER_VARIANTS } from "./PromoBanner";

const HomePage = () => {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex gap-10">
        <PromoBanner
          title="The Best Platform for Car Rental"
          description="Ease of doing a car rental safely and reliably. Of course at a low price."
          onPromoBannerLabel="Rental Car"
          imageSrc="/images/PromoCar.png"
          variant={PROMO_BANNER_VARIANTS.DEEP_BLUE}
        />
        {/* <PromoBanner
          title="Easy way to rent a car at a low price"
          description="Providing cheap car rental services and safe and comfortable facilities."
          onPromoBannerLabel="Rental Car"
          imageSrc="/images/PromoCar2.png"
          variant={PROMO_BANNER_VARIANTS.DEEP_BLUE}
        /> */}
      </div>

      <div className="mt-8">
        <CarCard />
      </div>
    </div>
  );
};

export default HomePage;
