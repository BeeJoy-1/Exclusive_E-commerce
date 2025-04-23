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
  }),
});

export const { useGetCategoryQuery, useGetAllFlashSaleQuery } = ExclusiveApi;
