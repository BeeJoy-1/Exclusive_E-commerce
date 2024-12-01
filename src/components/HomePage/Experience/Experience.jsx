import React, { useEffect, useState } from "react";
import boximg from "../../../assets/experience/box.png";

const Experience = () => {
  const [time, setTime] = useState(3 * 24 * 60 * 60 * 1000 || 0);

  //   New Worker for the countDown timer

  useEffect(() => {
    const worker = new Worker(
      new URL("../../../Workers/CountDown2worker.js", import.meta.url)
    );
    worker.postMessage(time);
    worker.onmessage = (e) => {
      setTime(e.data);
    };
  }, []);

  const formateDate = (milisecond) => {
    let total_sec = parseInt(Math.floor(milisecond / 1000));
    let total_min = parseInt(Math.floor(total_sec / 60));
    let total_hour = parseInt(Math.floor(total_min / 60));
    let day = parseInt(Math.floor(total_hour / 24));
    let second = parseInt(Math.floor(total_sec % 60));
    let minute = parseInt(Math.floor(total_min % 60));
    let hours = parseInt(Math.floor(total_hour % 60));
    return { day, second, minute, hours };
  };

  const { day, second, minute, hours } = formateDate(time);
  return (
    <div className=" my-[140px]">
      <div className="container">
        <div className="flex">
          <div className="w-1/2 bg-text_black000000 py-[100px] pl-32">
            <h3 className="text-button_green00ff66 text-[16px] font-semibold font-poppins">
              Categories
            </h3>
            <h2 className="text-[48px] font-Inter font-semibold text-white_FFFFFF leading-[60px] mt-[32px]">
              Enhance Your Music Experience
            </h2>
            <div className="flex gap-x-6 items-center mt-[32px]">
              <div className="w-[62px] h-[62px] rounded-full bg-white_FFFFFF flex flex-col items-center justify-center">
                <p className="text-text_black000000 text-[16px] font-poppins font-semibold">
                  {day ? day : 0}
                </p>
                <p className="text-text_black000000 text-[11px] font-poppins font-normal">
                  Days
                </p>
              </div>
              <div className="w-[62px] h-[62px] rounded-full bg-white_FFFFFF flex flex-col items-center justify-center">
                <p className="text-text_black000000 text-[16px] font-poppins font-semibold">
                  {hours ? hours : 0}
                </p>
                <p className="text-text_black000000 text-[11px] font-poppins font-normal">
                  Hours
                </p>
              </div>
              <div className="w-[62px] h-[62px] rounded-full bg-white_FFFFFF flex flex-col items-center justify-center">
                <p className="text-text_black000000 text-[16px] font-poppins font-semibold">
                  {minute ? minute : 0}
                </p>
                <p className="text-text_black000000 text-[11px] font-poppins font-normal">
                  Minutes
                </p>
              </div>
              <div className="w-[62px] h-[62px] rounded-full bg-white_FFFFFF flex flex-col items-center justify-center">
                <p className="text-text_black000000 text-[16px] font-poppins font-semibold">
                  {second ? second : 0}
                </p>
                <p className="text-text_black000000 text-[11px] font-poppins font-normal">
                  Seconds
                </p>
              </div>
            </div>
            <div className="bg-button_green00ff66 text-md font-poppins font-medium text-white_FFFFFF px-[48px] py-4 rounded cursor-pointer hover:opacity-85 inline-block mt-[40px]">
              Buy Now
            </div>
          </div>
          <div className="w-1/2 p-10 flex items-center justify-center image_shadow bg-text_black000000 py-[100px] overflow-hidden">
            <img src={boximg} alt={boximg} className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
