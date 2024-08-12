/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero_Section/Hero";
import Category from "./components/category/Category";
import Catergory02 from "./components/category/Category02";
import Services from "./components/Services/Services";
function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Catergory02 />
      <Services />
    </div>
  );
}

export default App;
