import React, { useEffect, useState } from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const Timer = (timeofOffer) => {
  const [time, setTime] = useState(3 * 24 * 60 * 60 * 1000 || 0);

  //   New Worker for the countDown timer

  useEffect(() => {
    const worker = new Worker(
      new URL("../../CountDownWorker.js", import.meta.url)
    );
    worker.postMessage(time);
    worker.onmessage = (e) => {
      setTime(e.data);
    };
  }, []);

  // useEffect normal for the timer
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setTime(time - 1000);
  //     }, 1000);
  //   }, [time]);

  // Formate the countDown date
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
    <div>
      <div className="flex items-center gap-x-4">
        <div className="flex flex-col items-start">
          <span className="font-medium text-[12px] font-poppins text-text_black000000">
            Days
          </span>
          <div className="flex items-center gap-x-3">
            <h1 className="text-text_black000000 font-bold font-Inter text-[32px]">
              {day < 10 ? `0${day}` : day ? day : "4"}
            </h1>
            <span className="text-text_reddb4444 text-xl">
              <IoEllipsisVerticalSharp />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <span className="font-medium text-[12px] font-poppins text-text_black000000">
            Hours
          </span>
          <div className="flex items-center gap-x-3">
            <h1 className="text-text_black000000 font-bold font-Inter text-[32px]">
              {hours ? hours : "4"}
            </h1>
            <span className="text-text_reddb4444 text-xl">
              <IoEllipsisVerticalSharp />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <span className="font-medium text-[12px] font-poppins text-text_black000000">
            Minutes
          </span>
          <div className="flex items-center gap-x-3">
            <h1 className="text-text_black000000 font-bold font-Inter text-[32px]">
              {minute ? minute : "5"}
            </h1>
            <span className="text-text_reddb4444 text-xl">
              <IoEllipsisVerticalSharp />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <span className="font-medium text-[12px] font-poppins text-text_black000000">
            Seconds
          </span>
          <h1 className="text-text_black000000 font-bold font-Inter text-[32px]">
            {second < 10 ? `0${second}` : second ? second : "4"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
