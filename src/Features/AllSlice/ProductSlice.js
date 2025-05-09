import { createSlice } from "@reduxjs/toolkit";
import { SuccessToast, ErrorToast, InfoToast } from "../../Utils/Toast";
import { CalculateDiscountPrice } from "../../Helpers/MakeDiscount";
import { getDiscountedNumericPrice } from "../../Helpers/TotalAmountCalc";

const initialState = {
  value: localStorage.getItem("CartItem")
    ? JSON.parse(localStorage.getItem("CartItem"))
    : [],
  TotalAmount: 0,
  TotalQuantity: 0,
};

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const SearchItem = state.value.findIndex((item) => {
        return item._id == action.payload._id;
      });
      if (SearchItem >= 0) {
        state.value[SearchItem].CartQuantity += 1;
        InfoToast(`${action.payload.Name} Quantity Increased!`);
        localStorage.setItem("CartItem", JSON.stringify(state.value));
      } else {
        state.value.push({ ...action.payload, CartQuantity: 1 });
        SuccessToast(`${action.payload.Name} Added to Cart!`);
        localStorage.setItem("CartItem", JSON.stringify(state.value));
      }
    },
    removeCart: (state, action) => {
      const FindItem = state.value.filter((item) => {
        return item._id !== action.payload._id;
      });
      state.value = FindItem;
      ErrorToast(`${action.payload.Name} Removed From Cart!`);
      localStorage.setItem("CartItem", JSON.stringify(state.value));
    },
    increment: (state, action) => {
      const SearchItem = state.value.findIndex((item) => {
        return item._id == action.payload._id;
      });
      state.value[SearchItem].CartQuantity += 1;
      InfoToast(`${action.payload.Name} Quantity Increased!`);
      localStorage.setItem("CartItem", JSON.stringify(state.value));
    },
    decrement: (state, action) => {
      const SearchItem = state.value.findIndex((item) => {
        return item._id == action.payload._id;
      });
      if (state.value[SearchItem].CartQuantity > 1) {
        state.value[SearchItem].CartQuantity -= 1;
        InfoToast(`${action.payload.Name} Quantity Decreased!`);
        localStorage.setItem("CartItem", JSON.stringify(state.value));
      }
    },
    getTotal: (state, action) => {
      const Total = state.value.reduce(
        (initialValue, item) => {
          const { Price, CartQuantity, Discount } = item;

          const discountedPrice = getDiscountedNumericPrice(Price, Discount); // 👈 use numeric helper

          const TotalSingleItemPrice = discountedPrice * CartQuantity;
          initialValue.amount += TotalSingleItemPrice;
          initialValue.quantity += CartQuantity;

          return initialValue;
        },
        {
          amount: 0,
          quantity: 0,
        }
      );

      // Format the total amount using M or K
      const formatWithSuffix = (num) => {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + "B";
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + "M";

        return Number.isInteger(num) ? num.toString() : num.toFixed(2);
      };

      state.TotalAmount = formatWithSuffix(Total.amount);
      state.TotalQuantity = Total.quantity;
    },

    // getTotal: (state, action) => {
    //   const Total = state.value.reduce(
    //     (initialvalue, item) => {
    //       const { Price, CartQuantity } = item;
    //       const TotalSingleItemPrice = Price * CartQuantity;
    //       initialvalue.amount += TotalSingleItemPrice;
    //       initialvalue.quantity += CartQuantity;
    //       return initialvalue;
    //     },
    //     {
    //       amount: 0,
    //       quantity: 0,
    //     }
    //   );
    //   state.TotalAmount = Total.amount;
    //   state.TotalQuantity = Total.quantity;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart, removeCart, increment, decrement, getTotal } =
  ProductSlice.actions;

export default ProductSlice.reducer;
