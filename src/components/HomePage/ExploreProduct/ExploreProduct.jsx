import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useGetAllProductsQuery } from "../../../Features/Api/ExclusiveApi";
import { Link } from "react-router-dom";

const ExploreProduct = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const AllProducts = data?.data?.map((item) => {
    return item;
  });

  return (
    <div className="container">
      <div className="flex flex-col items-center border-b-[1px] border-b-black_738 mb-10">
        <div>
          <ProductCommonLayout
            ProductCard={ProductCard}
            isArrowsTrue={true}
            heading="Our Products"
            description="Explore Our Products"
            PartialItemShow={4}
            componentData={AllProducts}
            isLoading={isLoading}
            rows={2}
          />
        </div>
        <Link to="/ProductDetail">
          <div className="pb-20">
            <button className="px-[48px] py-4 bg-text_reddb4444 rounded text-md font-poppins font-medium text-white_FFFFFF hover:opacity-75 cursor-pointer ">
              View All Products
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExploreProduct;
