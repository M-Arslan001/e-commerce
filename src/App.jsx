/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero_Section/Hero";
import Category from "./components/category/Category";
import Catergory02 from "./components/category/Category02";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import img01 from "./assets/hero/headphone.png";
function App() {
  const data = {
    discount: "15% Off",
    title: "fine smile",
    date: "2023-11-10",
    image: img01,
    title2: "Cozy & Warm",
    title3: "Limited Stock",
    title4: "Shop Today!",
    bgcolor: "#f42c37",
  };
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Catergory02 />
      <Services />
      <Banner {...data} />
    </div>
  );
}

export default App;
