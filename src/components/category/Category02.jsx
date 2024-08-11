/* eslint-disable no-unused-vars */
import React from "react";
import Cards from "./Card";
import img1 from "../../assets/category/gaming.png";
import img2 from "../../assets/category/speaker.png";
import img3 from "../../assets/category/vr.png";

const Catergory02 = () => {
  return (
    <>
      <div className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {/* 1st col */}
            <Cards
              title={"Enjoy"}
              pTitle={"text-white"}
              subtile={"with"}
              description={"X-box"}
              pDiscription={"text-white"}
              buttonText={"Browse"}
              buttonbgColor={"bg-primary"}
              textColors={"text-white"}
              imgSrc={img1}
              cardbgColor={"bg-brandYellow"}
              className="md:col-span-2 from-gray-300 to-gray-100"
              imgclassName="-right-0 top-1/2 -translate-y-1/2 w-[250px] "
            />
            {/* 2nd col */}
            <Cards
              title={"Enjoy"}
              pTitle={"text-white"}
              subtile={"with"}
              description={"Apple-VR"}
              buttonText={"Browse"}
              buttonbgColor={"bg-white"}
              textColors={"text-brandGreen"}
              imgSrc={img3}
              cardbgColor={"bg-brandYellow"}
              className="from-brandGreen/90 to-brandGreen/70"
              imgclassName="-right-0 lg:top-[40px] w-[270px] top-1 pl-7 "
            />
            {/* 3rd col */}
            <Cards
              title={"Enjoy"}
              pTitle={"text-white"}
              subtile={"with"}
              description={"Speakers"}
              buttonText={"Browse"}
              buttonbgColor={"bg-white"}
              textColors={"text-brandBlue"}
              imgSrc={img2}
              cardbgColor={"bg-brandYellow"}
              className="from-brandBlue/90 to-brandBlue/70"
              imgclassName="-right-0 lg:top-[40px] w-[260px] top-1 pl-7 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catergory02;
