import React from "react";
import BreadCrumbs from "../../components/CommonComponents/BreadCrumbs";
import ImageGallary from "../../components/CommonComponents/ProductDetailComponents/ImageGallary";
import { useGetSingleProductQuery } from "../../Features/Api/ProductApi";

const ProductDetail = () => {
  const { data, error, isLoading } = useGetSingleProductQuery(parseInt(1));

  return (
    <div className="py-20">
      <div className="container">
        <BreadCrumbs />
        <div className="grid grid-cols-2 gap-x-5">
          <div className="">
            <ImageGallary Image={data?.images} />
          </div>
          <div className=" bg-blue-400 ">2</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
