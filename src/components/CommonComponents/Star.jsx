import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const Star = ({ rating = 4.5 }) => {
  const star = Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) {
      return <IoIosStar key={index} className="text-yellow-300 text-xl" />;
    } else if (rating >= index + 0.5) {
      return <IoIosStarHalf key={index} className="text-yellow-300 text-xl" />;
    } else {
      return (
        <IoIosStarOutline key={index} className="text-yellow-300 text-xl" />
      );
    }
  });
  return <div className=" flex items-center gap-x-1">{star}</div>;
};

export default Star;
