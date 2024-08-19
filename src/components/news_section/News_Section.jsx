/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../../assets/blogs/blog-1.jpg";

const News_Section = () => {
  return (
    <>
      <div className="text-center mb-10">
        <div className="container">
          <h1 className="text-4xl font-bold">Recent News</h1>
          <p className="text-sm text-gray-500">Explore Our Blogs</p>
        </div>
      </div>

      <div>
        <div className="container mb-11">
          <div className="max-w-sm rounded-full ">
            <img
              className="w-full h-[350px] mx-auto object-cover"
              src={img1}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default News_Section;
