import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlinePerson } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="containers bg-white ">
      <div className="navbar">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <a href="# " className="justify-between text-[#5D8834]">
                  Home
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a href="#  ">Submenu 1</a>
                  </li>
                  <li>
                    <a href="#  ">Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#  ">About Us</a>
              </li>
              <li tabIndex={0}>
                <a href="# " className="justify-between">
                  Pages
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a href="#  ">Submenu 1</a>
                  </li>
                  <li>
                    <a href="#  ">Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#  ">Product</a>
              </li>
              <li>
                <a href="#  ">Blog</a>
              </li>
              <li>
                <a href="#  ">Contact Us</a>
              </li>
            </ul>
          </div>
          <a
            href="https://solutya.com/"
            className=" w-[217px] h-[56px]normal-case text-xl"
          >
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center px-2 hidden lg:flex">
          <ul className="menu menu-horizontal px-8">
            <li tabIndex={0}>
              <a href="# " className="text-[#5D8834]">
                Home
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="#  ">Submenu 1</a>
                </li>
                <li>
                  <a href="#  ">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="# " className="text-[#182625]">
                About Us
              </a>
            </li>
            <li tabIndex={0}>
              <a href="# " className="text-[#182625]">
                Pages
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="#  ">Submenu 1</a>
                </li>
                <li>
                  <a href="#  ">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="# " className="text-[#182625]">
                Product
              </a>
            </li>
            <li>
              <a href="# " className="text-[#182625]">
                Blog
              </a>
            </li>
            <li>
              <a href="# " className="text-[#182625]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center">
            <span className="p-3 mx-2 border border-[#5D8834] text-[#5D8834] cursor-pointer">
              <BsSearch />
            </span>
            <span className="p-3 mx-2 border border-[#5D8834] text-white bg-[#5D8834] cursor-pointer">
              <RiShoppingBagLine />
            </span>
            <span className="p-3 mx-2 border border-[#5D8834] text-[#5D8834] cursor-pointer">
              <MdOutlinePerson />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
