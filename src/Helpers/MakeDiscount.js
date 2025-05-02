export const CalculateDiscountPrice = (
  originalPrice = 0,
  discountPercentage = 0
) => {
  // Parse "2.5M" → 2500000
  const parsePrice = (price) => {
    if (typeof price === "string") {
      const match = price.match(/^([\d.]+)([KMB])?$/i);
      if (!match) return 0;

      const num = parseFloat(match[1]);
      const unit = match[2]?.toUpperCase();

      const multipliers = {
        K: 1_000,
        M: 1_000_000,
        B: 1_000_000_000,
      };

      return num * (multipliers[unit] || 1);
    }
    return price;
  };

  // Format number like 2.00M → 2M, 2.25M → 2.25M
  const formatPrice = (value) => {
    const format = (val, suffix) => {
      const formatted = val.toFixed(2);
      return formatted.endsWith(".00")
        ? parseFloat(formatted).toString() + suffix
        : formatted + suffix;
    };

    if (value >= 1_000_000_000) {
      return format(value / 1_000_000_000, "B");
    } else if (value >= 1_000_000) {
      return format(value / 1_000_000, "M");
      // } else if (value >= 1_000) {
      //   return format(value / 1_000, "K");
    } else {
      return value % 1 === 0 ? value.toString() : value.toFixed(2);
    }
  };

  const numericPrice = parsePrice(originalPrice);
  const discountAmount = (numericPrice * discountPercentage) / 100;
  const discountedPrice = numericPrice - discountAmount;

  return formatPrice(discountedPrice);
};

// Previous Code

// export const CalculateDiscountPrice = (
//   orginalPrice = 0,
//   discountPercentage = 0
// ) => {
//   const discountAmount = (orginalPrice * discountPercentage) / 100;
//   const discountPrice = orginalPrice - discountAmount;
//   return discountPrice;
// };
