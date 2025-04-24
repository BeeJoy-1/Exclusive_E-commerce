import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useBestSellingProductQuery } from "../../../Features/Api/ProductApi";
import { useGetAllBestSellingQuery } from "../../../Features/Api/ExclusiveApi";

const BestSelling = () => {
  // const { data, error, isLoading } = useBestSellingProductQuery();
  const { data, error, isLoading } = useGetAllBestSellingQuery();

  const BestSellingProducts = data?.data?.map((item) => {
    return item.Product?.[0];
  });

  return (
    <div className="container border-b-[1px] border-text_gray7D8184 ">
      <ProductCommonLayout
        ProductCard={ProductCard}
        heading="This Month"
        description="Best Selling Product"
        componentData={BestSellingProducts}
        isLoading={isLoading}
        PartialItemShow={4}
        viewButton={true}
      />
    </div>
  );
};

export default BestSelling;
