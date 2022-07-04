import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Post from '../../types/Post';
import ReducerNames from '../ReducerNames';

// http://jsonplaceholder.typicode.com/guide/ - docs

const postsApi = createApi({
  reducerPath: ReducerNames.POSTS_API,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
    getPostById: builder.query<Post, string>({
      query: id => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, usePrefetch } = postsApi;

export default postsApi;
