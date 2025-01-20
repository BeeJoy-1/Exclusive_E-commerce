import React from "react";
import { CalculateDiscountPrice } from "../../../Helpers/MakeDiscount";
import Star from "../Star";

const ProductInfo = ({ Data }) => {
  console.log(Data);

  return (
    <div className="flex flex-col items-start gap-y-1 mt-4">
      <h2 className="text-2xl font-Inter font-bold w-full truncate text-text_black000000">
        {Data ? Data.title : "HAVIT HV-G92 Gamepad"}
      </h2>
      <div className="mt-4">
        <div className="flex items-start gap-x-3 cursor-pointer">
          <Star rating={Data ? Data.rating : 0} />
          <h3 className="text-text_black000000 font-normal font-poppins text-md inline-block opacity-50 ">
            {`${Data?.reviews?.length}`} Reviews
          </h3>
          <span>|</span>
          <p className="mt-[1px] font-normal font-poppins text-md inline-block text-button_green00ff66">
            {Data?.availabilityStatus}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 mt-3">
        <span className="text-text_reddb4444 font-normal font-Inter text-2xl inline-block">
          $
          {CalculateDiscountPrice(
            Data?.price,
            Data?.discountPercentage
          ).toFixed(2)}
        </span>
        <span className="text-text_black000000 font-normal font-Inter text-2xl inline-block opacity-50 line-through">
          ${Data ? Data.price : 0}
        </span>
      </div>
      <p className="mt-4 text-md font-Inter font-normal text-text_black000000 w-[60%] border-b-[2px] border-b-gray-300 pb-10">
        {Data?.description}
      </p>
    </div>
  );
};

export default ProductInfo;
