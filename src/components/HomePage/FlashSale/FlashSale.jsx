import React from "react";
import ProductCard from "../../CommonComponents/ProductCard";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import { useGetAllProductQuery } from "../../../Features/Api/ProductApi";
import { useGetAllFlashSaleQuery } from "../../../Features/Api/ExclusiveApi";

const FlashSale = () => {
  // const { data, error, isLoading } = useGetAllProductQuery();
  const { data, error, isLoading } = useGetAllFlashSaleQuery();

  const FlashSaleProducts = data?.data?.map((item) => {
    return item.ProductID;
  });

  return (
    <div className="container">
      <div className="flex flex-col items-center border-b-[1px] border-b-black_738 mb-10">
        <ProductCommonLayout
          ProductCard={ProductCard}
          timeStamp={true}
          timeofOffer={1}
          isArrowsTrue={true}
          heading="Today's"
          description="Flash Sales"
          componentData={FlashSaleProducts}
          isLoading={isLoading}
        />
        <div className="pb-20">
          <button className="px-[48px] py-4 bg-text_reddb4444 rounded text-md font-poppins font-medium text-white_FFFFFF hover:opacity-75 cursor-pointer ">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
