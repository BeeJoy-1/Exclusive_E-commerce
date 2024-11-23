import React from "react";
import Heading from "../../CommonComponents/Heading";
import Timer from "../../CommonComponents/Timer";
import ProductCard from "../../CommonComponents/ProductCard";
import Slider from "react-slick";

const FlashSale = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  return (
    <div className="mt-[140px] mb-[60px] ">
      <div className="container">
        <div className="flex items-end gap-x-[87px]">
          <Heading title={"Today's"} description={"Flash Sale"} />
          <Timer />
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {[...new Array(12)].map((_, index) => (
              <div className="pr-6">
                <ProductCard />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
