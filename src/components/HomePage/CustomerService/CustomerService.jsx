import React from "react";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const CustomerService = () => {
  const service = [
    {
      id: 1,
      icon: (
        <TbTruckDelivery className="text-4xl p-3 text-white bg-text_black000000 w-[70px] h-[70px] rounded-full" />
      ),
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: (
        <FaHeadphonesSimple className="text-4xl p-3 text-white bg-text_black000000 w-[70px] h-[70px] rounded-full" />
      ),
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 3,
      icon: (
        <MdVerifiedUser className="text-4xl p-3 text-white bg-text_black000000 w-[70px] h-[70px] rounded-full" />
      ),
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
  ];

  return (
    <div className="my-20">
      <div className="container">
        <div className="flex items-center justify-around">
          {service?.map((item) => (
            <div className="flex flex-col items-center">
              <div className="w-[90px] h-[90px] rounded-full bg-text_gray7D8184 flex justify-center items-center">
                <span className="inline-block">{item.icon}</span>
              </div>
              <h1 className="text-lg font-semibold font-poppins text-black_738 mt-[24px]">
                {item.title}
              </h1>
              <h3 className="text-sm font-normal font-poppins text-black_738 mt-[8px]">
                {item.description}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
