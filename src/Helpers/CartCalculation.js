const getFormattedPrice = (rawPrice, quantity = 1, discountPercentage = 0) => {
  let numericPrice;

  if (typeof rawPrice === "string") {
    const price = rawPrice.toUpperCase().trim();

    if (price.endsWith("M")) {
      numericPrice = parseFloat(price) * 1_000_000;
    } else {
      numericPrice = parseFloat(price);
    }
  } else {
    numericPrice = rawPrice;
  }

  const discountedPrice =
    numericPrice - (numericPrice * discountPercentage) / 100;

  const total = discountedPrice * quantity;

  if (isNaN(total)) return "Invalid";

  const formatNumber = (num) => {
    return Number.isInteger(num) ? num.toString() : num.toFixed(2);
  };

  if (total >= 1_000_000) {
    return formatNumber(total / 1_000_000) + "M";
  } else {
    return formatNumber(total);
  }
};

export default getFormattedPrice;
