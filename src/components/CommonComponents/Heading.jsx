import React from "react";

const Heading = ({ title, description = true }) => {
  return (
    <div className=" flex flex-col items-start gap-y-6">
      <div className="flex items-center gap-x-4">
        <span className="w-[20px] h-[40px] bg-text_reddb4444 block rounded-[4px]"></span>
        <span className="text-text_reddb4444 font-poppins text-sm font-semibold capitalize">
          {title ? title : "Today's"}
        </span>
      </div>
      <div>
        {description && (
          <h1 className="font-Inter font-semibold text-[36px] text-text_black000000 capitalize">
            {description ? description : "Flash Sale"}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Heading;
