import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import p1 from "../../assets/products/p1.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CalculateDiscountPrice } from "../../Helpers/MakeDiscount";
import Star from "./Star";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ itemData }) => {
  return (
    <div className="mt-10">
      <Link to={`/ProductDetail/${itemData._id}`} className="block">
        <div className="">
          <div className="bg-white_F5F5F5 pb-[48px]  px-3 pt-4 rounded relative group cursor-pointer">
            <div className="flex items-center justify-between">
              {itemData.Discount && (
                <span className="inline-block px-3 py-2 bg-red-500 font-poppins text-sm text-white_FFFFFF font-normal rounded ">
                  -{itemData ? itemData.Discount : 0}% off
                </span>
              )}
              <span className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-white_FFFFFF text-xl cursor-pointer hover:bg-text_reddb4444 hover:text-white_FFFFFF transition-all">
                <IoHeartOutline />
              </span>
            </div>
            <div className="flex justify-center ">
              <div className="h-[152px] flex-1">
                <img
                  src={itemData ? itemData.Image : p1}
                  alt={p1}
                  className="h-full w-full object-contain mt-5"
                />
              </div>
              <span className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-white_FFFFFF text-xl cursor-pointer hover:bg-text_reddb4444 hover:text-white_FFFFFF transition-all mt-2">
                <MdOutlineRemoveRedEye />
              </span>
            </div>
            <div className=" w-full opacity-0 absolute left-0 bottom-0 group-hover:opacity-100 transition-all ">
              <div className="bg-text_black000000 text-text_whiteFAFAFA flex items-center justify-center cursor-pointer hover:bg-text_reddb4444 hover:text-white_FFFFFF transition-all h-12">
                <h3 className="font-poppins font-medium text-lg ">
                  Add To Cart
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-1 mt-4">
            <h2 className="text-lg font-poppins font-medium w-full truncate">
              {itemData ? itemData.Name : "HAVIT HV-G92 Gamepad"}
            </h2>
            <div className="flex items-center gap-x-3">
              <span className="text-text_reddb4444 font-medium font-poppins text-[16px] inline-block">
                {/* {parseFloat((itemData.Price || "0").replace(/,/g, "")) -
                  (parseFloat((itemData.Price || "0").replace(/,/g, "")) *
                    parseFloat(itemData.Discount || "0")) /
                    100} */}
                ${CalculateDiscountPrice(itemData?.Price, itemData?.Discount)}
              </span>
              <span className="text-text_black000000 font-medium font-poppins text-[16px] inline-block opacity-50 line-through">
                ${itemData ? itemData.Price : 0}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-x-1 cursor-pointer">
                <Star rating={itemData ? itemData.Rating : 0} />
                <h3 className="text-text_black000000 font-medium font-poppins text-[16px] inline-block opacity-50 ">{`(${itemData?.Review?.length})`}</h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
