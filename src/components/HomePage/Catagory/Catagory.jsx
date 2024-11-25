import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import CatagoryItem from "../../CommonComponents/CatagoryItem";
import { catagoryBrowse } from "../../../../Data/data";

const Catagory = () => {
  return (
    <div>
      <ProductCommonLayout
        heading={"Catagory"}
        description={"Browse by Catagory"}
        isArrowsTrue={true}
        ProductCard={CatagoryItem}
        PartialItemShow={6}
        componentData={catagoryBrowse}
      />
    </div>
  );
};

export default Catagory;
