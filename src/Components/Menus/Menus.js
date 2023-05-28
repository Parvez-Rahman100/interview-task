import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillGiftFill } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";

const Menus = () => {
  return (
    <div className=" flex justify-center shadow-xl   ">
      <div className="grid grid-cols-4 gap-5 bg-white w-[900px] h-[100px] text-center  ">
        <div className="flex justify-center items-center">
          <div className="text-[#558B2F] mr-3 text-xl ">
            <FaCarSide />
          </div>
          <div>
            <p>Free shipping order</p>
            <p>On orders over $100</p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-[#558B2F] mr-3 text-xl">
            <BsFillGiftFill />
          </div>
          <div>
            <p>Free shipping order</p>
            <p>On orders over $100</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-[#558B2F] mr-3 text-xl ">
            <GiRecycle />
          </div>
          <div>
            <p>Free shipping order</p>
            <p>On orders over $100</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-[#558B2F] mr-3 text-xl ">
            <BiPhoneCall />
          </div>
          <div>
            <p>Free shipping order</p>
            <p>On orders over $100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
