import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="mt-28 bg-[#558B2F] text-white pt-16 px-10">
      <div className="grid grid-cols-4 gap-5 text-center pb-7">
        <div className="text-white">
          <img src={logo} alt="logo" />
          <p className=" text-justify mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            nulla eu dui suscipit ultricies. Mauris vestibulum volutpat nisl vel
            cursus. Cras finibus nec mauris tincidunt condimentum.
          </p>
          <div className=" justify-start mt-7 flex items-center">
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
        <div>
          <h1 className=" font-semibold text-2xl pb-8">Link</h1>
          <ul>
            <li className="mt-2 cursor-pointer">Home</li>
            <li className="mt-2 cursor-pointer">About Us</li>
            <li className="mt-2 cursor-pointer">Products</li>
            <li className="mt-2 cursor-pointer">Contact Us</li>
            <li className="mt-2 cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <h1 className=" font-semibold text-2xl pb-8">Get In Touch</h1>
          <p className="mt-2">00440012345678</p>
          <p className="mt-2">plantush@plantush.com</p>
          <p className="mt-2">29 Washington Pl, New York, NY 10003, USA</p>
        </div>
        <div>
          <h1 className=" font-semibold text-2xl pb-8">Other Links</h1>
          <p className="mt-2">Privacy Policy</p>
          <p className="mt-2">Terms & Conditions</p>
        </div>
      </div>
      <br />
      <hr />
      <div className="flex justify-around items-center py-5">
        <p>Copyright & Design by Plantush-2023</p>
        <div className="flex justify-center items-center">
          <img src={f1} alt="cards" />
          <img src={f2} alt="cards" />
          <img src={f3} alt="cards" />
          <img src={f4} alt="cards" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
