/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import { DataProvider } from "./context/BannerData.jsx";
import Home from "./Pages/Home/Home.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
Home;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <RouterProvider router={router} />
    </div>
  </DataProvider>
);
