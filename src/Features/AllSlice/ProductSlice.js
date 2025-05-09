import { createSlice } from "@reduxjs/toolkit";
import { SuccessToast, ErrorToast, InfoToast } from "../../Utils/Toast";

const initialState = {
  value: localStorage.getItem("CartItem")
    ? JSON.parse(localStorage.getItem("CartItem"))
    : [],
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
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart, removeCart } = ProductSlice.actions;

export default ProductSlice.reducer;
