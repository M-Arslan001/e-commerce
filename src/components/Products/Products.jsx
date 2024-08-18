/* eslint-disable no-unused-vars */
import React from "react";
import Card from "../shared/Card";
import product from "./data";

const Products = () => {
  return (
    <>
      <div className="text-center mb-10">
        <div className="container">
          <h1 className="text-4xl font-bold">Our Products</h1>
          <p className="text-sm text-gray-500">Explore Our Products</p>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {product.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
