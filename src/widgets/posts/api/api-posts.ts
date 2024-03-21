import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API, POSTS_API} from "./const";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API,
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: ({limit = 15, start}) => ({
                url: POSTS_API,
                params: {
                    _limit: limit,
                    _start: start,
                },
            }),
        }),
        getPostById: builder.query({
            query: (id) => (`${POSTS_API}/${id}`),
        }),
    }),
});

export const {useGetPostsQuery, useGetPostByIdQuery} = postsApi;
