/* eslint-disable no-unused-vars */
import React from "react";
import SideBar from "../../components/Sidebar/SiderBar";
import Card from "../../components/shared/Card";
import img1 from "../../assets/product/p-1.jpg";
import img2 from "../../assets/product/p-2.jpg";
import img3 from "../../assets/product/p-3.jpg";
import img4 from "../../assets/product/p-4.jpg";
import img5 from "../../assets/product/p-5.jpg";
import img6 from "../../assets/product/p-7.jpg";
import img7 from "../../assets/product/p-9.jpg";
import img8 from "../../assets/shop/smartwatch.png";
import img9 from "../../assets/shop/desktop.avif";
import img10 from "../../assets/shop/pngegg.png";
import img11 from "../../assets/shop/samrtwatch01.png";
function Shop() {
  const product = [
    {
      id: 1,
      name: "Boat Headphone",
      description: "This is a sample product description.",
      price: 19.99,
      image: img1,
    },
    {
      id: 2,
      name: "Rocky Mountain",
      description: "This is a sample product description.",
      price: 25.55,
      image: img2,
    },
    {
      id: 3,
      name: "Goggles",
      description: "This is a sample product description.",
      price: 30.55,
      image: img3,
    },
    {
      id: 4,
      name: "Rocky ",
      description: "This is a sample product description.",
      price: 45.49,
      image: img4,
    },
    {
      id: 5,
      name: "Printed ",
      description: "This is a sample product description.",
      price: 45.49,
      image: img5,
    },
    {
      id: 6,
      name: "Printed ",
      description: "This is a sample product description.",
      price: 45.49,
      image: img6,
    },
    {
      id: 7,
      name: "Printed ",
      description: "This is a sample product description.",
      price: 45.49,
      image: img7,
    },
    {
      id: 8,
      name: "Printed ",
      description: "This is a sample product description.",
      price: 45.49,
      image: img1,
    },
    // New products
    {
      id: 9,
      name: "Smart Watch",
      description: "This is a sample product description.",
      price: 99.99,
      image: img8,
    },
    {
      id: 10,
      name: "Lenovo Desktop",
      description: "This is a sample product description.",
      price: 29.99,
      image: img9,
    },
    {
      id: 11,
      name: "Projector",
      description: "This is a sample product description.",
      price: 59.99,
      image: img10,
    },
    {
      id: 12,
      name: "Fitness Tracker",
      description: "This is a sample product description.",
      price: 39.99,
      image: img11,
    },
  ];
  return (
    <>
      {" "}
      {/* Content */}
      <div className="container mx-auto mt-8 px-4   ">
        {/* Sidebar */}
        {/* <div className="w-1/4"> */}
        {/* <div className="bg-white p-4 rounded shadow"> */}
        {/* <SideBar /> */}
        {/* </div> */}
        {/* </div> */}
        <div className=" bg-brandGreen/55 text-white text-center py-8 rounded-md mb-8">
          <h1 className="text-3xl font-bold">Shop Your Favorite Products</h1>
        </div>

        {/* Main Content */}

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4">
          {product.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
