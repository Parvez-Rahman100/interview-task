import React from "react";
import timer from "../../assets/timer.png";

const Timer = () => {
  return (
    <div className="containers mt-20">
      <div class=" relative">
        <img src={timer} alt="timer"></img>
        <div class=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 className=" font-semibold text-2xl">
            Here's The Skinny: Plants
            <br />
            <span>Bring People Joy</span>
          </h1>
          <div className="flex justify-around items-center text-center mt-7">
            <div className=" w-[74px] h-[71px] border shadow-lg">
              11 <br /> Days
            </div>
            <div className=" w-[74px] h-[71px] border shadow-lg">
              13 <br /> Hours
            </div>
            <div className=" w-[74px] h-[71px] border shadow-lg">
              29 Minutes
            </div>
            <div className=" w-[74px] h-[71px] border shadow-lg">
              17 Seconds
            </div>
          </div>
          <div className="text-center mt-7">
            <button className="btn bg-[#5D8834] font-medium text-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
