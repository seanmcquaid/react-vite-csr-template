import { createApi } from '@reduxjs/toolkit/query/react';
import { z } from 'zod';
import Post, { PostSchema } from '../../types/Post';
import ReducerNames from '../ReducerNames';
import axiosBaseQuery from '../axiosBaseQuery';

// http://jsonplaceholder.typicode.com/guide/ - docs

const postsApi = createApi({
  reducerPath: ReducerNames.POSTS_API,
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({
        url: '/posts',
        method: 'get',
        validationSchema: z.array(PostSchema),
      }),
    }),
    getPostById: builder.query<Post, string>({
      query: id => ({
        url: `/posts/${id}`,
        method: 'get',
        validationSchema: PostSchema,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, usePrefetch } = postsApi;

export default postsApi;
