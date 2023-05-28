import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephoneForward,
  BsTwitter,
} from "react-icons/bs";
import { RiMessage3Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className=" flex justify-around items-center bg-[#5D8834] text-white h-[42px]">
      <div className="left flex  ">
        <div className="flex items-center mr-2">
          <span className=" mr-1">
            <BsTelephoneForward />
          </span>
          <p>00440012345678</p>
        </div>
        <div className="flex justify-center items-center mr-2">
          <span className=" mr-1">
            <RiMessage3Line />
          </span>
          <p>plantush@plantush.com</p>
        </div>
      </div>
      <div className="right flex items-center">
        <p className=" mr-4 cursor-pointer">
          <BsFacebook />
        </p>
        <p className=" mr-4 cursor-pointer">
          <BsTwitter />
        </p>
        <p className=" mr-4 cursor-pointer">
          <BsInstagram />
        </p>
        <p className=" mr-4 cursor-pointer">
          <BsLinkedin />
        </p>
      </div>
    </div>
  );
};

export default Header;
