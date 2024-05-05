import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const medicineApi = createApi({
  reducerPath: 'medicineApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (builder) => ({
    registerMedicine: builder.mutation({
      query: (user) => {
        return {
          url: 'pharmacy/create-medicine/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json'
          }
        }
      }
    }),
    getmedicines: builder.query({
      query: (pharmacy)=> `pharmacy/medicines/?pharmacy=${pharmacy}`
    })
  })
})

export const { useRegisterMedicineMutation, useGetmedicinesQuery } = medicineApi