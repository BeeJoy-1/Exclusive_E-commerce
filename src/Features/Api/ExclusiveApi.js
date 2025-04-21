import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ExclusiveApi = createApi({
  reducerPath: "Exclusive",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
  endpoints: (builder) => ({
    GetCategory: builder.query({
      query: () => "/AllCategory",
    }),
  }),
});

export const { useGetCategoryQuery } = ExclusiveApi;
