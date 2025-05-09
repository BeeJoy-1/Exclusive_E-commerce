import React from "react";

const ProductLeft = ({
  categoryData,
  isLoading,
  error,
  HandleCategory = () => {},
}) => {
  // console.log("categoryData", categoryData);

  return (
    <div className="w-[24%]  border-r-[1.5px] border-r-text_gray7D8184">
      <h1 className="font-poppins font-bold text-[20px] text-text_black000000">
        Shop By Category
      </h1>
      {isLoading ? (
        <ul className="pt-8 pb-2">
          <div className="flex flex-col space-y-2">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between hover:bg-gray-200 group cursor-pointer animate-pulse"
              >
                <div className="w-1/2 py-3 mb-2 bg-gray-300 rounded-md"></div>
              </div>
            ))}
          </div>
        </ul>
      ) : (
        <ul className="pt-4 pb-2">
          {categoryData?.map((item, index) => (
            <div
              className="flex items-center justify-between hover:bg-gray-200 group cursor-pointer"
              key={index}
              onClick={() => HandleCategory(item._id)}
            >
              <li className="font-poppins text-md text-text_black000000 font-normal py-3 group-hover:pl-4 transition-all capitalize">
                {item.Title}
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductLeft;
