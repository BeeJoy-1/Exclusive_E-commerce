import React from "react";
import Heading from "../../CommonComponents/Heading";
import Timer from "../../CommonComponents/Timer";

const FlashSale = () => {
  return (
    <div className="mt-[140px] mb-[60px] ">
      <div className="container">
        <div className="flex items-end gap-x-[87px]">
          <Heading title={"Today's"} description={"Flash Sale"} />
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
