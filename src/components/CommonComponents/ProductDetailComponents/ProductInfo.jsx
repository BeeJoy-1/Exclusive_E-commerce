import React from "react";
import { CalculateDiscountPrice } from "../../../Helpers/MakeDiscount";
import { IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import Star from "../Star";
import { MdCurrencyExchange } from "react-icons/md";

const ProductInfo = ({ Data }) => {
  const sizes = [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M" },
    { id: 4, size: "L" },
    { id: 5, size: "XL" },
  ];

  return (
    <div className="flex flex-col items-start gap-y-1 pt-5">
      <h2 className="text-2xl font-Inter font-bold w-full truncate text-text_black000000">
        {Data ? Data.Name : "HAVIT HV-G92 Gamepad"}
      </h2>
      <div className="mt-4">
        <div className="flex items-start gap-x-3 cursor-pointer">
          <Star rating={Data ? Data.Rating : 0} />
          <h3 className="text-text_black000000 font-normal font-poppins text-md inline-block opacity-50 ">
            {`${Data?.Review?.length}`} Reviews
          </h3>
          <span>|</span>
          <p className="mt-[1px] font-normal font-poppins text-md inline-block text-button_green00ff66">
            {Data?.availabilityStatus || "In Stock"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 mt-3">
        <span className="text-text_reddb4444 font-normal font-Inter text-2xl inline-block">
          ${CalculateDiscountPrice(Data?.Price, Data?.Discount)}
        </span>
        <span className="text-text_black000000 font-normal font-Inter text-2xl inline-block opacity-50 line-through">
          ${Data ? Data.Price : 0}
        </span>
      </div>
      <p className="mt-4 text-md font-Inter font-normal text-text_black000000 w-[60%] border-b-[2px] border-b-gray-300 pb-10">
        {Data?.Description}
      </p>

      {/* card and size component */}
      <div className="mt-7">
        <div className="flex items-center gap-x-3">
          <h2 className="text-[20px]  font-normal font-inter text-text_black000000">
            Colours:
          </h2>
          <div className="border-2 border-text_black000000 rounded-full  w-[24px] h-[24px] flex items-center justify-center ">
            <span className="inline-block w-4 h-4 rounded-full bg-[#A0BCE0] "></span>
          </div>
          <div className="border-2 border-text_black000000 rounded-full  w-[24px] h-[24px] flex items-center justify-center ">
            <span className="inline-block w-4 h-4 rounded-full bg-red-500 "></span>
          </div>
        </div>

        {/* size */}
        <div className="flex items-center gap-x-3 mt-[30px]">
          <h2 className="text-[20px]  font-normal font-inter text-text_black000000">
            Size:
          </h2>

          <div className="flex items-center gap-x-3 ">
            {sizes.map((size, index) => (
              <div
                className="border-2 border-x-gray-300 rounded  w-[36px] h-[36px] flex items-center justify-center "
                key={index}
              >
                <span
                  className="inline-block text-[14px] font-bold  font-popins cursor-pointer"
                  key={size.id}
                >
                  {size.size}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* button */}
        <div className="mt-10 flex items-center  gap-x-4">
          <div className="flex items-center justify-center">
            <span className="px-5 py-2 border-2 border-gray-300  rounded-l-lg text-[20px] font-popins text-text_black000000 cursor-pointer hover:text-white_FFFFFF hover:bg-text_reddb4444 hover:border-transparent">
              -
            </span>
            <span className="px-8 py-2 border-2 border-gray-300  text-[20px] font-popins text-text_black000000 border-l-0 cursor-pointer ">
              2
            </span>
            <span className="px-4 py-2 border-2 border-gray-300 rounded-r-lg text-[20px] font-popins text-text_black000000 border-l-0 cursor-pointer hover:text-white_FFFFFF hover:bg-text_reddb4444 hover:border-transparent">
              +
            </span>
          </div>

          <button className="py-[12px] px-[48px] bg-text_reddb4444 rounded-[5px] border-none font-popins font-medium text-white_FFFFFF text-[16px]">
            Add To Cart
          </button>

          <div className="border-2 border-x-gray-300 rounded flex items-center justify-center py-[6.8px] px-3 cursor-pointer hover:bg-red-500 hover:text-white_FFFFFF hover:border-transparent">
            <span className="inline-block text-3xl font-bold  font-popins w-full h-full ">
              <IoIosHeartEmpty />
            </span>
          </div>
        </div>
        {/* button */}

        {/* condition  */}
        <div className="mt-10">
          <div className="flex items-center gap-x-3 border border-gray-300 w-[450px] px-14 py-4">
            <span className="text-4xl">
              <TbTruckDelivery />
            </span>
            <div>
              <h4 className="text-[16px]  font-medium font-popins text-text_black000000">
                Free Delivery
              </h4>
              <p className="text-[12px]  font-medium font-popins text-text_black000000">
                {"nei"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-3 border border-gray-300 w-[450px] px-14 py-4">
            <span className="text-4xl">
              <MdCurrencyExchange />
            </span>
            <div>
              <h4 className="text-[16px]  font-medium font-popins text-text_black000000">
                Return Delivery
              </h4>
              <p className="text-[12px]  font-medium font-popins text-text_black000000">
                {"NEI"}
              </p>
            </div>
          </div>
        </div>
        {/* condition  */}
      </div>
    </div>
  );
};

export default ProductInfo;
