/* eslint-disable no-unused-vars */
import React from "react";
import Cards from "./Card";
import img1 from "../../assets/category/earphone.png";
import img3 from "../../assets/category/watch.png";
import img4 from "../../assets/category/macbook.png";

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
              pTitleclassName={"text-white"}
              subtile={"with"}
              description={"Gadget"}
              buttonText={"Browse"}
              buttonbgColor={"bg-white"}
              textColors={"text-brandYellow"}
              imgSrc={img3}
              cardbgColor={"bg-brandYellow"}
              className="from-brandYellow/90 to-brandYellow/70"
              imgclassName="-right-4 lg:top-[40px]  bottom-[100px] pl-7"
            />
            {/* 3rd col */}
            <Cards
              title={"Enjoy"}
              pTitleclassName={"text-white"}
              subtile={"with"}
              description={"Laptop"}
              buttonText={"Browse"}
              buttonbgColor={"bg-white"}
              textColors={"text-secondary"}
              imgSrc={img4}
              cardbgColor={"bg-brandYellow"}
              className="md:col-span-2 from-secondary/90 to-secondary/70"
              imgclassName="-right-3 md:-right-0 top-1/2 -translate-y-1/2 w-[210px] md:w-[290px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
