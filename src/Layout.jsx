/* eslint-disable no-unused-vars */
import React from "react";
import Header from ".././src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
