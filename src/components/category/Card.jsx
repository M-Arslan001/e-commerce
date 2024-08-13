/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../shared/Button";

const Cards = ({
  title,
  subtile,
  description,
  buttonText,
  buttonbgColor,
  textColors,
  cardbgColor,
  imgSrc,
  className = "",
  imgclassName = "",
  pTitleclassName = "",
  pTitle,
  pDiscription,
  ...props
}) => {
  return (
    <div
      className={`py-10 pl-5 shadow-xl bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end hover:transform hover:-translate-y-2 hover:shadow-lg transition-transform duration-300 ${cardbgColor} ${className} `}
      {...props} // This will pass other props down to the div
    >
      <div>
        <div className="mb-4">
          <p className={`mb-[2px] text-gray-400 ${pTitleclassName}`}>{title}</p>
          <p className="text-2xl font-semibold mb-[2px]">{subtile}</p>
          <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
            {description}
          </p>
          <Button
            text={buttonText}
            bgColor={buttonbgColor}
            textColor={textColors}
          />
        </div>
      </div>
      <img
        src={imgSrc}
        className={`w-[320px] absolute bottom-0 ${imgclassName}`}
        alt=""
      />
    </div>
  );
};

export default Cards;
