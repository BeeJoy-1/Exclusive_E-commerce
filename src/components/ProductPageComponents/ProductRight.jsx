import React, { useState } from "react";
import ProductCard from "../CommonComponents/ProductCard";
import { useGetAllProductQuery } from "../../Features/Api/ProductApi";

const ProductRight = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  const [page, setpage] = useState(1);
  const [pagePerShow, setpagePerShow] = useState(9);
  let totalPage = data?.limit / 9;

  // Pagination Funtion
  const handlePerItem = (index) => {
    if (index > 0 && index <= Math.ceil(totalPage)) {
      setpage(index);
    }
  };

  return (
    <div className="w-[70%]">
      <div className="flex items-center justify-end gap-x-2">
        <h1 className="font-poppins font-normal text-[16px] text-text_black000000">
          Show :
        </h1>
        <select name="" id="" className="px-3 rounded-sm py-1 bg-slate-200">
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
      </div>
      {/* product  */}
      <div className="flex flex-wrap justify-between">
        {data?.products
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
