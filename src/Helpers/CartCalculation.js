const getFormattedPrice = (rawPrice, quantity = 1) => {
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

  const total = numericPrice * quantity;

  if (isNaN(total)) return "Invalid";

  if (total >= 1_000_000) {
    return (total / 1_000_000).toFixed(2) + "M";
  } else {
    return total.toFixed(2);
  }
};

export default getFormattedPrice;
