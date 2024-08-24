/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { FaLinkedin, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  const custmerService = [
    { id: 1, name: "Privacy Police" },
    { id: 2, name: "Refun policy" },
    { id: 3, name: "Shipping Police" },
    {
      id: 4,
      name: "Exchange Police",
    },
  ];
  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Shop",
      link: "#/shop",
    },
    {
      id: 3,
      name: "About",
      link: "#/about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "#/blog",
    },
  ];
  return (
    <>
      <footer className="">
        <div className="container">
          <div className="flex flex-row gap-8">
            <div className="cursor-pointer py-7 ">
              <a href="#" className=" sm:text-2xl text-primary font-bold">
                Zen<span className="text-brandGreen">Cart</span>
              </a>
              <p className="pt-3  text-gray-500 lg:pr-24 max-w-md leading-relaxed pb-1 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.
              </p>
              <button className=" bg-primary rounded-sm text-white font-semibold hover:scale-105 hover:bg-primary/70 py-1 px-2 duration-300 shadow-lg ">
                Browse Now
              </button>
            </div>

            {/* links */}
            <div className="py-7">
              <div>
                <h1 className="font-bold text-2xl whitespace-nowrap">
                  Important links
                </h1>
                <ul>
                  {MenuLinks.map((item, index) => (
                    <li
                      className="py-[5px] text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300 cursor-pointer"
                      key={index}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* customer service */}
            <div className="py-7 ">
              <div>
                <h1 className="font-bold text-2xl whitespace-nowrap">
                  Customer Service
                </h1>
                <ul className="items-center">
                  {custmerService.map((item, index) => (
                    <li
                      className="py-[5px]  text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300 cursor-pointer"
                      key={index}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* address */}
            <div className="py-[32px] ">
              <h1 className="text-xl font-bold ">Address</h1>
              <address className="flex items-center gap-2 py-4 ">
                <FaLocationDot />
                <p> 132, My Street, Kingston, New York 12401</p>
              </address>
              <div className=" flex items-center gap-2">
                <FaMobileAlt />
                <p>(907) 262-626</p>
              </div>
              <div className="flex items-center gap-3 py-4 cursor-pointer">
                <FaInstagram className="hover:text-red-600 duration-200 text-2xl" />
                <FaLinkedin className="hover:text-blue-600 duration-200 text-2xl" />
                <FaFacebook className="hover:text-blue-600 duration-200 text-2xl" />
                <FaTwitter className="hover:text-blue-600 duration-200 text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
