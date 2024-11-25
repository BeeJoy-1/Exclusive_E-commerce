import React from "react";

const CatagoryItem = ({ itemData }) => {
  return (
    <div className="mt-16">
      <div className="w-full h-[145px] bg-transparent rounded border-[1px] border-text_gray7D8184 flex items-center justify-center cursor-pointer hover:bg-text_reddb4444 hover:text-white_FFFFFF hover:border-transparent transition-all ">
        <div className="flex flex-col items-center gap-y-3">
          <span className="text-[30px]">{itemData.image}</span>
          <h1 className="text-lg font-poppins font-normal">{itemData.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CatagoryItem;
