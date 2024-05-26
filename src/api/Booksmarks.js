import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const booksmarks = createApi({
    reducerPath : 'booksmarks',
    tagTypes : ['Products'],
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:3001/'}),
    endpoints : (builder) => ({
        getBooksmarks : builder.query({
            query : () => 'booksmarks',
            method : 'GET',
            providesTags : (result) => 
            result
            ? [
                ...result.map(({ id })=>({type : 'Products',id})),
                { type : 'Products', id : 'LIST' },
            ]
            : [{type : 'Products', id : 'LIST'}]
        }),
        addBooksmarks : builder.mutation({
            query : (body)=>({
                url : 'booksmarks',
                method : 'POST',
                body
            }),
            invalidatesTags : [{type : 'Products',id : 'LIST'}]
        }),
        removeToBooksmarks : builder.mutation({
            query : (id) => ({
                url : `booksmarks/${id}`,
                method : 'DELETE'
            }),
            invalidatesTags: [{ type: 'Products', id: 'LIST' }] 
        })
    }),
})
export const {useGetBooksmarksQuery, useAddBooksmarksMutation, removeToBooksmarks} = booksmarks;