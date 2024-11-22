import React from "react";

const Header = () => {
  return (
    <div className=" bg-text_black000000 py-3">
      <div className="container ">
        <div className="flex justify-between items-center ">
          <div></div>
          <div>
            <h2 className="text-white_FFFFFF font-poppins text-[15px] font-normal">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h2>
          </div>
          <div>
            <select
              name=""
              id=""
              className="bg-transparent text-white_FFFFFF text-[14px] font-normal font-poppins"
            >
              <option value="#">English</option>
              <option value="#">Bangla</option>
              <option value="#">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
