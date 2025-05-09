export const getDiscountedNumericPrice = (rawPrice, discountPercentage = 0) => {
  let numericPrice;

  if (typeof rawPrice === "string") {
    const price = rawPrice.toUpperCase().trim();

    if (price.endsWith("M")) {
      numericPrice = parseFloat(price) * 1_000_000;
    } else if (price.endsWith("K")) {
      numericPrice = parseFloat(price) * 1_000;
    } else if (price.endsWith("B")) {
      numericPrice = parseFloat(price) * 1_000_000_000;
    } else {
      numericPrice = parseFloat(price);
    }
  } else {
    numericPrice = rawPrice;
  }

  const discountedPrice =
    numericPrice - (numericPrice * discountPercentage) / 100;

  return discountedPrice;
};
