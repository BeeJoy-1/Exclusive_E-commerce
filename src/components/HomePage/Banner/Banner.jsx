import React, { useState } from "react";
import { catagory } from "../../../../Data/data";
import { LiaAngleRightSolid } from "react-icons/lia";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import bannerImg from "../../../assets/banner/banner.jpg";
import { useGetCategoryQuery } from "../../../Features/Api/ExclusiveApi";

const Banner = () => {
  const [currentSlide, SetcurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "Absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#DB4444",
            marginRight: "12px",
            border: "3px solid #fff",
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#fff",
            opacity: "0.5",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      SetcurrentSlide(currentSlide);
    },
  };

  //Call Exclusive Api
  const { data, isLoading, isError } = useGetCategoryQuery();

  return (
    <div>
      <div className="container ">
        <div className="flex justify-between">
          <div className="w-[24%]  border-r-[1.5px] border-r-text_gray7D8184">
            {isLoading ? (
              <ul className="pt-[54px] pb-2">
                <div className="flex flex-col space-y-2">
                  {[...Array(9)].map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between hover:bg-gray-200 group cursor-pointer animate-pulse"
                    >
                      <div className="w-[75%] py-3 mb-4 bg-gray-300 rounded-md"></div>
                    </div>
                  ))}
                </div>
              </ul>
            ) : (
              <ul className="pt-10 pb-2">
                {data?.data.map((item, index) => (
                  <div
                    className="flex items-center justify-between hover:bg-gray-200 group cursor-pointer"
                    key={index}
                  >
                    <li className="font-poppins text-md text-text_black000000 font-normal py-3 group-hover:pl-4 transition-all">
                      {item.Title}
                    </li>
                    {item.subCatagory && (
                      <span className="pr-4 text-xl text-text_black000000">
                        <LiaAngleRightSolid />
                      </span>
                    )}
                  </div>
                ))}
              </ul>
            )}
          </div>
          <div className="w-[77%] h-[344px] pl-[45px] pt-10">
            <div className="slider-container">
              <Slider {...settings}>
                {[...new Array(5)].map((_, index) => (
                  <div key={index}>
                    <img
                      src={bannerImg}
                      alt={bannerImg}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
