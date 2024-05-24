import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
        }),
        addPost: builder.mutation({
            query: (newPost) => ({
                url: "/posts/add",
                method: "POST",
                body: newPost,
            }),
        
        }),
        updatePost: builder.mutation({
            query: (updatedPost) => ({
                url: `/posts/${updatedPost.id}`,
                method: "PUT",
                body: updatedPost,
            }),
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation, useUpdatePostMutation } = apiSlice;