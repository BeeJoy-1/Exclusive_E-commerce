import React, { useState } from "react";
import ProductCard from "../CommonComponents/ProductCard";

import {
  useGetAllProductsQuery,
  useGetSingleCategoryQuery,
} from "../../Features/Api/ExclusiveApi";
import ProductSkeleton from "../../Helpers/ProductSkeleton";

const ProductRight = ({ CategoryID = null }) => {
  // const { data, error, isLoading } = useGetAllProductQuery();
  const { data, error, isLoading } = CategoryID
    ? useGetSingleCategoryQuery(CategoryID)
    : useGetAllProductsQuery();

  const [page, setpage] = useState(1);
  const [pagePerShow, setpagePerShow] = useState(9);
  let totalPage = data?.data?.length / 9;

  // Pagination Funtion
  const handlePerItem = (index) => {
    if (index > 0 && index <= Math.ceil(totalPage)) {
      setpage(index);
    }
  };

  // Option Handeler
  const handleOption = (e) => {
    setpagePerShow(parseInt(e.target.value));
  };

  return (
    <div className="w-[70%]">
      <div className="flex items-center justify-end gap-x-2">
        <h1 className="font-poppins font-normal text-[16px] text-text_black000000">
          Show :
        </h1>
        <select
          name=""
          id=""
          className="px-3 rounded-sm py-1 bg-slate-200"
          onChange={handleOption}
        >
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
      </div>
      {/* product  */}
      <div className="flex flex-wrap justify-between">
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <div className="w-[30%]" key={index}>
                <ProductSkeleton />
              </div>
            ))
          : CategoryID
          ? data?.data?.Product?.slice(page * 9 - 9, page * pagePerShow).map(
              (item, index) => (
                <div className="w-[30%]" key={index}>
                  <ProductCard itemData={item} />
                </div>
              )
            )
          : data?.data
              ?.slice(page * 9 - 9, page * pagePerShow)
              .map((item, index) => (
                <div className="w-[30%]" key={index}>
                  <ProductCard itemData={item} />
                </div>
              ))}
      </div>
      <div
        aria-label="Page navigation example "
        className="flex justify-center items-center mt-20"
      >
        <ul class="inline-flex -space-x-px text-base h-10">
          <li>
            <span
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-text_black000000 bg-white border border-gray-300 cursor-pointer"
              onClick={() => handlePerItem(page - 1)}
            >
              Previous
            </span>
          </li>
          {[...new Array(Math.ceil(totalPage) || 8)].map((_, index) => (
            <li>
              <span
                href="#"
                className={
                  index + 1 === page
                    ? "flex items-center justify-center px-4 h-10 leading-tight text-white_FFFFFF bg-text_reddb4444 border border-text_reddb4444"
                    : "flex items-center justify-center px-4 h-10 leading-tight text-text_black000000 bg-white border border-gray-300 cursor-pointer"
                }
                onClick={() => handlePerItem(index + 1)}
              >
                {index + 1}
              </span>
            </li>
          ))}
          <li>
            <span
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-text_black000000 bg-white border border-gray-300 cursor-pointer"
              onClick={() => handlePerItem(page + 1)}
            >
              Next
            </span>
          </li>
        </ul>
      </div>
      {/* product  */}
    </div>
  );
};

export default ProductRight;
