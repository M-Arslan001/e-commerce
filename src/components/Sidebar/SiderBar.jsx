/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaLaptop } from "react-icons/fa";
import { FaRProject } from "react-icons/fa6";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  FiHome,
  FiHeadphones,
  FiMonitor,
  FiPhone,
  FiWatch,
} from "react-icons/fi";
import { LuProjector } from "react-icons/lu";

const SideBar = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (itemName) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const menuItems = [
    { name: "Home", icon: <FiHome />, subItems: [] },
    {
      name: "Headphones",
      icon: <FiHeadphones />,
      subItems: ["Item 1", "Item 2"],
    },
    { name: "Lenovo", icon: <FiMonitor />, subItems: ["Item 1", "Item 2"] },
    {
      name: "Projector",
      icon: <LuProjector />,
      subItems: ["Item 1", "Item 2"],
    },
    { name: "Macbook", icon: <FaLaptop />, subItems: [] },
    { name: "Contact Us", icon: <FiPhone />, subItems: [] },
    { name: "Smart Watches", icon: <FiWatch />, subItems: [] },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-md">
      <h2 className="text-lg font-bold bg-primary text-white py-3 px-4">
        MENU
      </h2>
      <ul className="p-4">
        {menuItems.map((item) => (
          <li key={item.name} className="mb-4">
            <button
              onClick={() => toggleItem(item.name)}
              className="flex items-center justify-between w-full text-left"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </div>
              {item.subItems.length > 0 && (
                <span>
                  {openItems[item.name] ? (
                    <FiChevronUp className="h-5 w-5" />
                  ) : (
                    <FiChevronDown className="h-5 w-5" />
                  )}
                </span>
              )}
            </button>
            {openItems[item.name] && item.subItems.length > 0 && (
              <ul className="mt-2 ml-8">
                {item.subItems.map((subItem, index) => (
                  <li key={index} className="mb-2">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="mt-8">
          <button className="flex items-center text-left">
            <span>More</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
