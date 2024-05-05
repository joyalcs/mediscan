import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
  reducerPath: 'userAuthSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: 'users/register/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json'
          }
        }
      }
    }),
    loginUser: builder.mutation({
        query: (user) => {
            return {
                url: 'users/login/',
                method: 'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json'
                  }
            }
        }
    })
  })
})

export const { useRegisterUserMutation,
                useLoginUserMutation } = userAuthApi