import React, { useEffect, useRef } from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import CatagoryItem from "../../CommonComponents/CatagoryItem";
import { BsSmartwatch } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { GiConsoleController } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { useGetCategoryQuery } from "../../../Features/Api/ExclusiveApi";
import { useDispatch } from "react-redux";
import { getCategory } from "../../../Features/AllSlice/countSlice";

// const catagoryBrowse = [
//   {
//     id: 1,
//     name: "Phones",
//     image: <CiMobile4 />,
//   },
//   {
//     id: 2,
//     name: "Computers",
//     image: <RiComputerLine />,
//   },
//   {
//     id: 3,
//     name: "Smart watch",
//     image: <BsSmartwatch />,
//   },
//   {
//     id: 4,
//     name: "Camera",
//     image: <FaCameraRetro />,
//   },
//   {
//     id: 5,
//     name: "HeadPhones",
//     image: <FaHeadphonesSimple />,
//   },
//   {
//     id: 6,
//     name: "Gaming",
//     image: <GiConsoleController />,
//   },
//   {
//     id: 7,
//     name: "Phones",
//     image: <CiMobile4 />,
//   },
//   {
//     id: 8,
//     name: "Computers",
//     image: <RiComputerLine />,
//   },
//   {
//     id: 9,
//     name: "Smart watch",
//     image: <BsSmartwatch />,
//   },
// ];

const Catagory = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetCategoryQuery();
  const isDataDispatched = useRef(false);

  useEffect(() => {
    if (!isLoading && !isDataDispatched.current && data?.data) {
      dispatch(getCategory(data.data));
      isDataDispatched.current = true;
    }
  }, [isLoading, dispatch, data]);

  let newArr = [];
  data?.data.map((item) => {
    newArr.push({
      id: item?._id,
      name: item?.Title,
      image: <FaHeadphonesSimple />,
    });
  });

  return (
    <div>
      <ProductCommonLayout
        heading={"Catagory"}
        description={"Browse by Catagory"}
        isArrowsTrue={true}
        ProductCard={CatagoryItem}
        PartialItemShow={6}
        componentData={newArr}
      />
    </div>
  );
};

export default Catagory;
