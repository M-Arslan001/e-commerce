/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Card = ({ product }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-brandGreen/55">
        <img
          className="w-full h-53 object-cover"
          src={product.image}
          alt={product.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold sm:text-xl mb-2  ">{product.name}</div>
          <p className="text-gray-700 text-base ">{product.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button className="  text-brandGreen font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-white">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
