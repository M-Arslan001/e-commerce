/* eslint-disable no-unused-vars */
import React from "react";
import data from "./data";

const Services = () => {
  return (
    <div className="mt-4 md:mt-20">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start sm:flex-row gap-4  "
            >
              <item.icon className="text-4xl md:text-5xl text-primary" />
              <div>
                <h1 className="lg:text-xl font-bold">{item.title}</h1>
                <h1 className="text-gray-400 text-sm">{item.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
