import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useBestSellingProductQuery } from "../../../Features/Api/ProductApi";

const BestSelling = () => {
  const { data, error, isLoading } = useBestSellingProductQuery();
  return (
    <div className="container border-b-[1px] border-text_gray7D8184 ">
      <ProductCommonLayout
        ProductCard={ProductCard}
        heading="This Month"
        description="Best Selling Product"
        componentData={data?.products}
        isLoading={isLoading}
        PartialItemShow={4}
        viewButton={true}
      />
    </div>
  );
};

export default BestSelling;
