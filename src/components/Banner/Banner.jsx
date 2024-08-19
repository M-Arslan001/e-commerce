/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
// import data from "./data";
const Banner = (data) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgcolor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          <div className="p-6 sm:p-8">
            <p className="text-sm">{data.discount}</p>
            <h1 className="text-4xl uppercase lg:text-7xl font-bold">
              {data.title}
            </h1>
            <p className="text-sm">{data.date}</p>
          </div>
          <div className="h-full flex items-center">
            <motion.img
              src={data.image}
              alt=""
              className="scale-125 w-[250px] md:w-[500px] mx-auto drop-shadow-2xl object-cover "
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ x: 0, rotate: 0 }}
            />
          </div>
          <div className=" flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p className="font-bold text-xl">{data.title2}</p>
            <p className="text-3xl sm:text-5xl font-bold">{data.title3}</p>
            <p className="text-sm tracking-wide leading-5">{data.title4}</p>
            <button className="bg-white text-primary rounded-full font-bold py-2 px-4 ">
              Shop Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
