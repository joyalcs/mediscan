import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pharmacyApi = createApi({
  reducerPath: 'pharmacyApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (builder) => ({
    registerPharmacy: builder.mutation({
      query: (user) => {
        return {
          url: 'pharmacy/register-pharmacy/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json'
          }
        }
      }
    }),
    getSerachPharmacy: builder.query({
        query: ({medicine, pincode})=> `pharmacy/medicines/?medicine=${medicine}&pincode=${pincode}`
    })
  })
})

export const { useRegisterPharmacyMutation, useGetSerachPharmacyQuery } = pharmacyApi 