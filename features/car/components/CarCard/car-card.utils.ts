export const getDiscountedPrice = (price: number, discount?: number): string => {
  if (discount === undefined || discount <= 0) {
    return formatPrice(price);
  }
  const discountedPrice = price - (price * discount) / 100;
  return formatPrice(discountedPrice);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
