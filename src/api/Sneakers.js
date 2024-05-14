import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const sneakers = createApi({
    reducerPath : 'sneakers',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getsneakers : builder.query({
            query : () => 'sneakers',
            method : 'GET'
        })
    })
})
export const {useGetsneakersQuery} = sneakers;



