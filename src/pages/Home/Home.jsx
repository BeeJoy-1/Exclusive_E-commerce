import React from "react";
import Header from "../../components/RootLayout/Header/Header";
import Navbar from "../../components/RootLayout/NavBar/Navbar";
import Banner from "../../components/HomePage/Banner/Banner";
import FlashSale from "../../components/HomePage/FlashSale/FlashSale";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
    </div>
  );
};

export default Home;
