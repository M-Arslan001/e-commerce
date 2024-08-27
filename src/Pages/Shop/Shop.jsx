/* eslint-disable no-unused-vars */
import React from "react";
import SideBar from "../../components/Sidebar/SiderBar";

function Shop() {
  return (
    <>
      {" "}
      {/* Content */}
      <div className="container mx-auto mt-8 px-4 flex">
        {/* Sidebar */}
        <div className="w-1/4">
          {/* <div className="bg-white p-4 rounded shadow"> */}
          <SideBar />
          {/* </div> */}

          <div className="bg-white p-4 rounded shadow mt-8">
            <h3 className="text-xl font-bold mb-4">Filter by</h3>
            <div className="mb-4">
              <label className="block mb-2">Price</label>
              <input
                type="text"
                placeholder="Min"
                className="border rounded w-full px-3 py-2"
              />
              <input
                type="text"
                placeholder="Max"
                className="border rounded w-full px-3 py-2 mt-2"
              />
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Apply
              </button>
              <button className="mt-2 bg-gray-500 text-white px-4 py-2 rounded">
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <label>Show: </label>
              <select className="border rounded px-3 py-2">
                <option>6</option>
                <option>12</option>
                <option>18</option>
              </select>
            </div>
            <div>
              <label>Sort by: </label>
              <select className="border rounded px-3 py-2">
                <option>Oldest First</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <img
                src="laptop.jpg"
                alt="Product"
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-bold mt-4">Acer C720</h3>
              <p className="text-gray-500">$479.00</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <span className="text-white bg-red-500 px-2 py-1 text-xs rounded absolute">
                SALE
              </span>
              <img
                src="ipad.jpg"
                alt="Product"
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-bold mt-4">Apple iPad Air 2</h3>
              <p className="text-gray-500">$548.00</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <img
                src="speaker.jpg"
                alt="Product"
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-bold mt-4">Beats by Dre</h3>
              <p className="text-gray-500">$153.00</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
