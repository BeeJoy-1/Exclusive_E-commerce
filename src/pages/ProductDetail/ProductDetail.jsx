import React from "react";
import BreadCrumbs from "../../components/CommonComponents/BreadCrumbs";
import ImageGallary from "../../components/CommonComponents/ProductDetailComponents/ImageGallary";
import ProductInfo from "../../components/CommonComponents/ProductDetailComponents/ProductInfo";
import { useLocation, useParams } from "react-router-dom";
import ProductInfoSkeleton from "../../components/Skeleton/ProductInfoSkeleton";
import Heading from "../../components/CommonComponents/Heading";
import Slider from "react-slick";

import ProductCard from "../../components/CommonComponents/ProductCard";
import {
  useGetSingleCategoryQuery,
  useGetSingleProductsQuery,
} from "../../Features/Api/ExclusiveApi";

const ProductDetail = () => {
  const Params = useParams();
  const { data, error, isLoading } = useGetSingleProductsQuery(
    Params?.id || "67c7d830ddf35e2ce1d4c7ca"
  );

  const CategoryData = useGetSingleCategoryQuery(data?.data.Category?._id);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: false,
  };
  console.log(CategoryData?.data?.data?.Product);

  return (
    <div className="py-[140px]">
      <div className="container">
        {isLoading ? (
          <ProductInfoSkeleton />
        ) : (
          <div>
            <BreadCrumbs />
            <div className="grid grid-cols-2 gap-x-10">
              <div className="">
                <ImageGallary Image={data?.data.Image} />
              </div>
              <div className="">
                <ProductInfo Data={data?.data} />
              </div>
            </div>
          </div>
        )}

        {/* Related Item  */}
        <div className="mt-20">
          <Heading title="Related Item" description={false} />
          <Slider {...settings}>
            {CategoryData?.data?.data?.Product.map((item, index) => (
              <div className="px-5" key={index}>
                <ProductCard itemData={item} />
              </div>
            ))}
          </Slider>
        </div>
        {/* Related Item  */}
      </div>
    </div>
  );
};

export default ProductDetail;
