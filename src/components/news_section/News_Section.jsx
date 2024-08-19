/* eslint-disable no-unused-vars */
import React from "react";
import data from "./data";
const News_Section = () => {
  return (
    <>
      <div className="text-center mb-10">
        <div className="container">
          <h1 className="text-4xl font-bold">Recent News</h1>
          <p className="text-sm text-gray-500">Explore Our Blogs</p>
        </div>
      </div>
      <div className="container mt-4 mb-5 cursor-pointer">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 ">
          {data.map((item, index) => (
            <div key={index}>
              <div className="overflow-hidden rounded-2xl mb-2 ">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[250px] object-cover rounded-lg hover:scale-105 duration-500"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{item.published}</p>
                <p className="font-bold line-clamp-1 ">{item.title}</p>
                <p className="text-sm line-clamp-2 text-gray-600 dark:text-gray-400">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News_Section;
