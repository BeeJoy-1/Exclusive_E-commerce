import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/countSlice";
import { ProductApi } from "./Api/ProductApi";
import { ExclusiveApi } from "./Api/ExclusiveApi";
import ProductSlice, { getTotal } from "./AllSlice/ProductSlice";

export const store = configureStore({
  reducer: {
    category: counterSlice,
    product: ProductSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [ExclusiveApi.reducerPath]: ExclusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductApi.middleware)
      .concat(ExclusiveApi.middleware),
});
store.dispatch(getTotal());
