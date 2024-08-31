/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import ThemeBtn from "../ThemeChanger/ThemeBtn";
import { ThemeProvider } from "../../context/Theme";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [themeMode, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lightTheme = () => {
    setTheme("light");
  };
  const darkTheme = () => {
    setTheme("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Shop",
      link: "/shop",
    },
    {
      id: 3,
      name: "Blogs",
      link: "/blogs",
    },
    {
      id: 4,
      name: "About",
      link: "/about",
    },

    {
      id: 5,
      name: "Contact Us",
      link: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <header className="w-full py-6 bg-white dark:bg-gray-900 relative z-40">
        <nav className="container md:px-10 py-4 px-7 md:flex justify-between items-center">
          {/* Flex container for logo and menu button */}
          <div className="flex justify-between items-center w-full md:w-auto">
            {/* logo here */}
            <div className="cursor-pointer items-center gap-2">
              <Link to="/" className="text-2xl text-primary font-bold">
                Zen<span className="text-brandGreen">Cart</span>
              </Link>
            </div>
            {/* Menu icon */}
            <button className="text-2xl md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* navlinks here */}
          <div
            className={`md:flex md:justify-between md:items-center md:w-full ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="md:flex md:justify-center pl-9 md:pl-[0px] items-center md:space-x-11">
              {MenuLinks.map((data, index) => (
                <li
                  className="dark:hover:text-white text-gray-500 hover:text-black font-semibold my-7 md:my-0 md:ml-5 "
                  key={index}
                >
                  <NavLink
                    to={data.link}
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "text-gray-700"
                    }
                  >
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="md:flex md:justify-between md:items-center gap-4 md:px-[7px] ">
              <div className="relative hidden md:block items-center">
                <input
                  type="text"
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg w-full md:w-43"
                  placeholder="Search..."
                />
                <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
              </div>
              <div className="flex flex-col px-9 md:px-0 md:flex-row ">
                <button className="relative items-center">
                  <Link to="/cart">
                    <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                  </Link>
                </button>
              </div>
              <div className="hidden md:block items-center">
                <ThemeBtn />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </ThemeProvider>
  );
}

export default Navbar;
