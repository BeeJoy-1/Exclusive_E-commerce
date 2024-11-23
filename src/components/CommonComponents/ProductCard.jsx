import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import p1 from "../../assets/products/p1.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="mt-10">
      <div className="">
        <div className="bg-white_F5F5F5 pb-[48px]  px-3 pt-4 rounded relative group cursor-pointer">
          <div className="flex items-center justify-between">
            <span className="inline-block px-3 py-2 bg-red-500 font-poppins text-sm text-white_FFFFFF font-normal rounded ">
              -40% off
            </span>
            <span className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-white_FFFFFF text-xl cursor-pointer hover:bg-text_reddb4444 hover:text-white_FFFFFF transition-all">
              <IoHeartOutline />
            </span>
          </div>
          <div className="flex justify-center ">
            <div className="h-[152px] flex-1">
              <img
                src={p1}
                alt={p1}
                className="h-full w-full object-contain "
              />
            </div>
            <span className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-white_FFFFFF text-xl cursor-pointer hover:bg-text_reddb4444 hover:text-white_FFFFFF transition-all mt-2">
              <MdOutlineRemoveRedEye />
            </span>
          </div>
          <div className=" w-full opacity-0 absolute left-0 bottom-0 group-hover:opacity-100 transition-all ">
            <div className="bg-text_black000000 text-text_whiteFAFAFA flex items-center justify-center cursor-pointer hover:bg-text_reddb4444 hover:text-white_FFFFFF transition-all h-12">
              <h3 className="font-poppins font-medium text-lg ">Add To Cart</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-1 mt-4">
          <h2 className="text-lg font-poppins font-medium">
            HAVIT HV-G92 Gamepad
          </h2>
          <div className="flex items-center gap-x-3">
            <span className="text-text_reddb4444 font-medium font-poppins text-[16px] inline-block">
              $120
            </span>
            <span className="text-text_black000000 font-medium font-poppins text-[16px] inline-block opacity-50 line-through">
              $160
            </span>
          </div>
          <div>
            <div className="flex items-center gap-x-1 cursor-pointer">
              {" "}
              {[...new Array(5)].map((_, index) => (
                <span className="text-yellow-300">
                  <FaStar />
                </span>
              ))}
              <h3 className="text-text_black000000 font-medium font-poppins text-[16px] inline-block opacity-50 ">{`(${
                [...new Array(5)]?.length
              })`}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
