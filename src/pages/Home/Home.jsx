import React from "react";
import Header from "../../components/RootLayout/Header/Header";
import Navbar from "../../components/RootLayout/NavBar/Navbar";
import Banner from "../../components/HomePage/Banner/Banner";
import FlashSale from "../../components/HomePage/FlashSale/FlashSale";
import Catagory from "../../components/HomePage/Catagory/Catagory";
import BestSelling from "../../components/HomePage/BestSelling/BestSelling";
import Experience from "../../components/HomePage/Experience/Experience";
import ExploreProduct from "../../components/HomePage/ExploreProduct/ExploreProduct";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
      <Catagory />
      <BestSelling />
      <Experience />
      <ExploreProduct />
    </div>
  );
};

export default Home;
