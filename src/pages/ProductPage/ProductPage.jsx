import React from "react";
import ProductLeft from "../../components/ProductPageComponents/ProductLeft";
import ProductRight from "../../components/ProductPageComponents/ProductRight";
import BreadCrumbs from "../../components/CommonComponents/BreadCrumbs";
import { useGetAllProductCategoryListQuery } from "../../Features/Api/ProductApi";

const ProductPage = () => {
  const { data, error, isLoading } = useGetAllProductCategoryListQuery();

  return (
    <div className="container pt-5 pb-20">
      <div className="">
        <BreadCrumbs />
        <div className="flex justify-between">
          <ProductLeft
            categoryData={data}
            isLoading={isLoading}
            error={error}
          />
          <ProductRight />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
