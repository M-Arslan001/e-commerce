/* eslint-disable no-unused-vars */
import React from "react";

import Hero from "../../components/Hero_Section/Hero";
import Category from "../../components/category/Category";
import Catergory02 from "../../components/category/Category02";
import Services from "../../components/Services/Services";
import Banner from "../../components/Banner/Banner";
import Banner02 from "../../components/Banner/Banner02";
import Products from "../../components/Products/Products";
import News_Section from "../../components/news_section/News_Section";
import Brands from "../../components/Brands_secetion/Brands";
import Footer from "../../components/footer/Footer";
import { useData } from "../../context/BannerData";
const Home = () => {
  const { data, data02 } = useData();
  return (
    <>
      <Hero />
      <Category />
      <Catergory02 />
      <Services />
      <Banner {...data} />
      <Products />
      <Banner02 {...data02} />
      <News_Section />
      <Brands />
    </>
  );
};

export default Home;
