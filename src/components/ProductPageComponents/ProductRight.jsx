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
    setpage(index);
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
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </span>
          </li>
          {[...new Array(Math.ceil(totalPage) || 8)].map((_, index) => (
            <li>
              <span
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => handlePerItem(index + 1)}
              >
                {index + 1}
              </span>
            </li>
          ))}
          <li>
            <span
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
