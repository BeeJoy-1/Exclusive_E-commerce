import React from "react";
import Header from "../../components/RootLayout/Header/Header";
import Navbar from "../../components/RootLayout/NavBar/Navbar";
import Banner from "../../components/HomePage/Banner/Banner";
import FlashSale from "../../components/HomePage/FlashSale/FlashSale";
import Catagory from "../../components/HomePage/Catagory/Catagory";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
      <Catagory />
    </div>
  );
};

export default Home;
