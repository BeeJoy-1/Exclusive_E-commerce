import React from "react";
import BreadCrumbs from "../CommonComponents/BreadCrumbs";
import {
  useGetAllProductQuery,
  useGetProductByCategoryQuery,
} from "../../Features/Api/ProductApi";
import Slider from "react-slick";
import ProductCard from "../CommonComponents/ProductCard";
import Heading from "../CommonComponents/Heading";

const WishListComponents = () => {
  const { data, isLoading, error } = useGetAllProductQuery();
  const justforyou = useGetProductByCategoryQuery("smartphones");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: false,
  };

  return (
    <div className="py-[80px]">
      <div className="container">
        <BreadCrumbs />
        <div className="flex items-center justify-between">
          <h3 className="text-[20px] font-poppins font-medium text-text_black000000">
            WishList (4)
          </h3>
          <button className="px-[48px] py-[16px] border border-gray-300 font-poppins font-medium text-[16px] text-text_black000000 ">
            Move to Cart
          </button>
        </div>
        <div className="mt-[60px]">
          <Slider {...settings}>
            {data?.products.map((item) => (
              <div className="px-4">
                <ProductCard itemData={item} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-[96px]">
          <div className="flex items-center justify-between">
            <Heading title="Just for you" />
            <button className="px-[48px] py-[16px] border border-gray-300 font-poppins font-medium text-[16px] text-text_black000000 ">
              See All
            </button>
          </div>
        </div>
        <div className="mt-[60px]">
          <Slider {...settings}>
            {justforyou?.data?.products.map((item) => (
              <div className="px-4">
                <ProductCard itemData={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WishListComponents;
