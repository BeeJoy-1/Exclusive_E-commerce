import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ExclusiveApi = createApi({
  reducerPath: "Exclusive",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  endpoints: (builder) => ({
    GetCategory: builder.query({
      query: () => "/AllCategory",
    }),
    GetAllFlashSale: builder.query({
      query: () => "/FlashSale",
    }),
    GetAllBestSelling: builder.query({
      query: () => "/AllBSproducts",
    }),
    GetAllProducts: builder.query({
      query: () => "/GetAllProduct",
    }),
    GetSingleProducts: builder.query({
      query: (id) => `/SingleProduct/${id}`,
    }),
    GetSingleCategory: builder.query({
      query: (id) => `/SingleCategory/${id}`,
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetAllFlashSaleQuery,
  useGetAllBestSellingQuery,
  useGetAllProductsQuery,
  useGetSingleProductsQuery,
  useGetSingleCategoryQuery,
} = ExclusiveApi;
