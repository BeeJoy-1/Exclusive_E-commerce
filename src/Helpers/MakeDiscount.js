export const CalculateDiscountPrice = (
  orginalPrice = 0,
  discountPercentage = 0
) => {
  const discountAmount = (orginalPrice * discountPercentage) / 100;
  const discountPrice = orginalPrice - discountAmount;
  return discountPrice;
};
