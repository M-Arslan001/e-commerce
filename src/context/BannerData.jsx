/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext } from "react";
// import img01 from "./assets/hero/headphone.png";
import img01 from ".././assets/hero/headphone.png";
import img02 from ".././assets/category/smartwatch2-removebg-preview.png";

const dataContext = createContext();

export const DataProvider = ({ children }) => {
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
    <dataContext.Provider value={{ data, data02 }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
