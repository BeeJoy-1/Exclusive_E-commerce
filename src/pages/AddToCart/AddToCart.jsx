import React, { useEffect } from "react";
import BreadCrumbs from "../../components/CommonComponents/BreadCrumbs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../../Features/Api/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import getFormattedPrice from "../../Helpers/CartCalculation.js";
import {
  removeCart,
  increment,
  decrement,
  getTotal,
} from "../../Features/AllSlice/ProductSlice.js";
import { CalculateDiscountPrice } from "../../Helpers/MakeDiscount.js";
const AddToCart = () => {
  const { data, isLoading, error } = useGetAllProductQuery();
  const { TotalAmount, TotalQuantity, value } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  //RealTime Update
  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, localStorage.getItem("CartItem")]);

  //Handle RemoveCart
  const handleRemoveCart = (itemID) => {
    dispatch(removeCart(itemID));
  };

  //Handleincrementitem
  const Handleincrementitem = (item) => {
    dispatch(increment(item));
  };
  //Handleincrementitem
  const HandledecrementItem = (item) => {
    dispatch(decrement(item));
  };

  return (
    <div className="my-20">
      <div className="container">
        <BreadCrumbs />
        <div className="flex justify-between items-center shadow-lg rounded">
          <div className="basis-[400px] py-6">
            <h1 className="text-[16px] font-poppins font-normal text-text_black000000 pl-10">
              Product
            </h1>
          </div>
          <div className="flex-1 py-6 text-center">
            <h1 className="text-[16px] font-poppins font-normal text-text_black000000 ml-[-28px]">
              Price
            </h1>
          </div>
          <div className="flex-1 py-6 text-center">
            <h1 className="text-[16px] font-poppins font-normal text-text_black000000 ml-[-23px]">
              Quality
            </h1>
          </div>
          <div className="flex-1 py-6 text-right">
            <h1 className="text-[16px] font-poppins font-normal text-text_black000000 pr-10">
              SubTotal
            </h1>
          </div>
        </div>
        {/* cartitem */}
        <div className="custom_scrollbar w-full h-[500px] overflow-y-scroll ">
          {data?.data?.cartITem?.length == 0 && (
            <Link
              className="flex justify-center items-center w-full"
              to={"/ProductDetail"}
            >
              <button className="px-[48px] py-[16px] bg-transparent  text-text_black000000 text-[18px] font-medium font-popins border-[2px] border-gray-300 rounded">
                Back To Shop
              </button>
            </Link>
          )}
          {value?.map((item) => (
            <div className="mb-2" key={item?._id}>
              <div className="flex justify-between items-center shadow-lg rounded">
                <div className="flex-1 py-6  flex justify-start relative">
                  <div className="flex pl-10 items-center gap-x-5  ">
                    <img
                      src={item?.Image[0]}
                      alt={item?.Image[0]}
                      className="w-[54px] h-[54px] object-contain"
                    />

                    <span
                      className="w-[20px] h-[20px] rounded-full bg-text_reddb4444 absolute text-white_FFFFFF flex justify-center items-center top-[23%] left-[8%] font-semibold cursor-pointer hover:opacity-70"
                      onClick={() => handleRemoveCart(item)}
                    >
                      X
                    </span>
                    <h1 className="text-[16px] font-popins font-normal text-text_black000000 ">
                      {item?.Name}
                    </h1>
                  </div>
                </div>
                <div className=" flex-1  py-6 flex justify-center">
                  <h1 className="text-[20px] font-popins font-normal text-text_black000000">
                    ${CalculateDiscountPrice(item?.Price, item?.Discount)}
                  </h1>
                </div>
                <div className=" flex-1  py-6 flex   justify-center">
                  <div className="flex items-center justify-center gap-x-3 w-[100px] rounded border border-gray-400">
                    <input
                      type="text"
                      value={item?.CartQuantity}
                      className=" w-[25px] text-[20px] font-popins font-normal text-text_black000000"
                    />
                    <div className="flex flex-col items-center justify-center mt-[-2px]">
                      <span
                        className=""
                        onClick={() => Handleincrementitem(item)}
                      >
                        <IoIosArrowUp className="inline-block  cursor-pointer" />
                      </span>

                      <span
                        className=""
                        onClick={() => HandledecrementItem(item)}
                      >
                        <IoIosArrowDown className="inline-block  cursor-pointer" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex-1 flex justify-end py-6">
                  <h1 className="text-[20px] font-popins font-normal text-text_black000000 pr-10">
                    $
                    {getFormattedPrice(
                      item?.Price,
                      item?.CartQuantity,
                      item?.Discount
                    )}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* cartitem */}

        {/* button */}
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <Link to={"/ProductDetail"}>
              <button className="px-[48px] py-[16px] bg-transparent  text-text_black000000 text-[18px] font-medium font-popins border-[2px] border-gray-300 rounded">
                Return To Shop
              </button>
            </Link>
            <button className="px-[40px] py-[16px] bg-transparent  text-text_black000000 text-[18px] font-medium font-popins border-[2px] border-gray-300 rounded">
              Update Cart
            </button>
          </div>
        </div>
        {/* button */}

        {/* subtotal and coupon */}
        <div className="mt-[80px] flex items-start justify-between">
          <div className="flex items-center gap-x-3">
            <input
              type="text"
              className="py-3 px-10  border  border-gray-300"
              placeholder="Coupon Code"
            />

            <button className="px-[48px] py-[12px] bg-text_reddb4444 text-white_FFFFFF text-[18px] font-medium font-popins rounded">
              Apply Coupon
            </button>
          </div>

          <div>
            <div class="w-[470px] px-4 py-6 text-gray-900 bg-white border border-gray-200 rounded-lg">
              <h1 className="pl-3 font-popins font-normal text-text_black000000 text-[20px] mb-3">
                Cart Total
              </h1>

              <div className="justify-between   relative inline-flex items-center w-full px-4 py-2 font-popins font-normal text-text_black000000 text-[16px border-b border-gray-200 rounded-t-lg hover:bg-gray-100">
                <button type="button">Discount:</button>
                <span className="inline-block font-popins font-normal text-text_black000000 text-[16px]">
                  {" "}
                  0%
                </span>
              </div>

              <div className="justify-between   relative inline-flex items-center w-full px-4 py-2 font-popins font-normal text-text_black000000 text-[16px border-b border-gray-200 rounded-t-lg hover:bg-gray-100">
                <button type="button">Quantity:</button>
                <span className="inline-block font-popins font-normal text-text_black000000 text-[16px]">
                  {" "}
                  {TotalQuantity || 0}
                </span>
              </div>

              <div className="justify-between   relative inline-flex items-center w-full px-4 py-2 font-popins font-normal text-text_black000000 text-[16px rounded-t-lg hover:bg-gray-100">
                <button type="button">Total:</button>
                <span className="inline-block font-popins font-normal text-text_black000000 text-[16px]">
                  {" "}
                  ${TotalAmount || 0}
                </span>
              </div>
            </div>
            <div className="w-full  flex justify-center mt-10">
              <Link
                to="/checkout"
                className="px-[48px] py-[12px] bg-text_reddb4444  text-white_FFFFFF text-[18px] font-medium font-popins rounded"
              >
                Procees to checkout
              </Link>
            </div>
          </div>
        </div>
        {/* subtotal and copun */}
      </div>
    </div>
  );
};

export default AddToCart;
