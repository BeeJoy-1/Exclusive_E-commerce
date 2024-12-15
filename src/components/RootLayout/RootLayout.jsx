import React from "react";
import Header from "./Header/Header";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
