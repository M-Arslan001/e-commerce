/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import data from "./Herodata";
import Button from "../shared/Button";
const ComponentName = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    // slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="container">
        <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[660px] herobgcolor flex justify-center items-center">
          <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
              {data.map((products) => (
                <div key={products.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text */}
                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                      <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold first-letter:uppercase ">
                        {products.subtitle}
                      </h1>
                      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold first-letter:uppercase">
                        {products.title}
                      </h1>
                      <h1 className="text-4xl md:text-5xl  uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                        {products.title2}
                      </h1>
                      <div>
                        <Button
                          text="Shop Now"
                          bgColor="bg-primary"
                          textColor="text-white"
                        />
                      </div>
                    </div>
                    <div className="order-1 sm:order-2">
                      <div>
                        <img
                          src={products.image}
                          className="w-[300px] sm:h-[450px] h-[300px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentName;
