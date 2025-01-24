import React from "react";
import BreadCrumbs from "../../components/CommonComponents/BreadCrumbs";
import ImageGallary from "../../components/CommonComponents/ProductDetailComponents/ImageGallary";
import ProductInfo from "../../components/CommonComponents/ProductDetailComponents/ProductInfo";
import { useLocation, useParams } from "react-router-dom";
import ProductInfoSkeleton from "../../components/Skeleton/ProductInfoSkeleton";
import Heading from "../../components/CommonComponents/Heading";
import Slider from "react-slick";
import {
  useGetProductByCategoryQuery,
  useGetSingleProductQuery,
} from "../../Features/Api/ProductApi";
import ProductCard from "../../components/CommonComponents/ProductCard";

const ProductDetail = () => {
  const Params = useParams();
  const { data, error, isLoading } = useGetSingleProductQuery(
    parseInt(Params?.id)
  );

  const CategoryData = useGetProductByCategoryQuery("Beauty");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

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
                <ImageGallary Image={data?.images} />
              </div>
              <div className="">
                <ProductInfo Data={data} />
              </div>
            </div>
          </div>
        )}

        {/* Related Item  */}
        <div className="mt-20">
          <Heading title="Related Item" description={false} />
          <Slider {...settings}>
            {CategoryData.data?.products.map((item, index) => (
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
