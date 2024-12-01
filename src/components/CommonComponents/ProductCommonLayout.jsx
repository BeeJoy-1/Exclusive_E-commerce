import React, { useRef } from "react";
import Heading from "./Heading";
import Timer from "./Timer";
import Slider from "react-slick";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ProductSkeleton from "../../Helpers/ProductSkeleton";

const ProductCommonLayout = ({
  ProductCard = () => <ProductSkeleton />,
  timeStamp = false,
  isArrowsTrue = false,
  timeofOffer = 0,
  heading = "Today's",
  description = "Flash Sale",
  PartialItemShow = 4,
  componentData = [],
  isLoading = false,
  viewButton = false,
  rows = 1,
}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: PartialItemShow || 4,
    slidesToScroll: 4,
    autoplay: true,
    rows: rows,
  };

  const next = () => {
    sliderRef.current.slickPrev();
  };
  const prev = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="mt-[140px] mb-[60px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-end gap-x-[87px]">
            <Heading title={heading} description={description} />
            {timeStamp && <Timer timeofOffer={timeofOffer} />}
          </div>
          {isArrowsTrue && (
            <div className="flex items-center gap-x-4">
              <h1
                onClick={next}
                className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-text_reddb4444 hover:text-white_FFFFFF transition"
              >
                <span className="text-xl">
                  <IoMdArrowBack />
                </span>
              </h1>
              <h1
                onClick={prev}
                className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-text_reddb4444 hover:text-white_FFFFFF transition"
              >
                <span className="text-xl">
                  <IoMdArrowForward />
                </span>
              </h1>
            </div>
          )}
          {viewButton && (
            <div className="bg-text_reddb4444 text-md font-poppins font-medium text-white_FFFFFF px-[48px] py-4 rounded cursor-pointer hover:opacity-85">
              View All
            </div>
          )}
        </div>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {isLoading
              ? [...new Array(4)].map((_, index) => (
                  <div
                    className={PartialItemShow > 4 ? "pr-8" : "pr-6"}
                    key={index}
                  >
                    <ProductSkeleton />
                  </div>
                ))
              : componentData?.map((item, index) => (
                  <div
                    className={PartialItemShow > 4 ? "pr-8" : "pr-6"}
                    key={index}
                  >
                    <ProductCard itemData={item ? item : {}} />
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductCommonLayout;
