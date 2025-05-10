import React, { useEffect } from "react";
import Header from "./Header/Header";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../Features/AllSlice/ProductSlice";

const RootLayout = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.product.value);

  useEffect(() => {
    dispatch(getTotal());
  }, [value, dispatch]);
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
