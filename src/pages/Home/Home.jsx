import React from "react";

import Banner from "../../components/HomePage/Banner/Banner";
import FlashSale from "../../components/HomePage/FlashSale/FlashSale";
import Catagory from "../../components/HomePage/Catagory/Catagory";
import BestSelling from "../../components/HomePage/BestSelling/BestSelling";
import Experience from "../../components/HomePage/Experience/Experience";
import ExploreProduct from "../../components/HomePage/ExploreProduct/ExploreProduct";
import CustomerService from "../../components/HomePage/CustomerService/CustomerService";

const Home = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <Catagory />
      <BestSelling />
      <Experience />
      <ExploreProduct />
      <CustomerService />
    </div>
  );
};

export default Home;
