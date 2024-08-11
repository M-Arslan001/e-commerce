/* eslint-disable no-unused-vars */
import React from "react";
import Cards from "./Card";
import img1 from "../../assets/category/earphone.png";
import img2 from "../../assets/category/gaming.png";
import img3 from "../../assets/category/watch.png";
const Category = () => {
  return (
    <>
      <div className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {/* 1st col */}
            <Cards
              title={"Enjoy"}
              subtile={"with"}
              description={"Earphone"}
              buttonText={"Browse"}
              buttonbgColor={"bg-primary"}
              textColors={"text-white"}
              imgSrc={img1}
            />
            {/* 2nd col */}
            <Cards
              title={"Enjoy"}
              subtile={"with"}
              description={"Gadget"}
              buttonText={"Browse"}
              buttonbgColor={"bg-primary"}
              textColors={"text-white"}
              imgSrc={img3}
              cardbgColor={"bg-brandYellow"}
              className="from-brandYellow/90 to-brandYellow/70"
              imgclassName="-right-4 lg:top-[40px]"
            />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Category;
