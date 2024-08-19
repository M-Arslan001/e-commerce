/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero_Section/Hero";
import Category from "./components/category/Category";
import Catergory02 from "./components/category/Category02";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner02 from "./components/Banner/Banner02";
import img01 from "./assets/hero/headphone.png";
import img02 from "./assets/category/smartwatch2-removebg-preview.png";
import Products from "./components/Products/Products";
import News_Section from "./components/news_section/News_Section";
import Brands from "./components/Brands_secetion/Brands";
import Footer from "./components/footer/Footer";
function App() {
  const data = {
    discount: "15% Off",
    title: "fine smile",
    date: "2023-11-10",
    image: img01,
    title2: "Air Solo Base",
    title3: "Limited Stock",
    title4: "Lorem ipsum Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. ",
    bgcolor: "#f42c37",
  };
  const data02 = {
    discount: "30% Off",
    title: "Happy Hours",
    date: "2023-11-10",
    image: img02,
    title2: "smart solo",
    title3: "Limited Stock",
    title4: "Lorem ipsum Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. ",
    bgcolor: "#2dcc6f",
  };
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Catergory02 />
      <Services />
      <Banner {...data} />
      <Products />
      <Banner02 {...data02} />
      <News_Section />
      <Brands />
      <Footer />
    </div>
  );
}
export default App;
