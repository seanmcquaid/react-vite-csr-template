import { createApi } from '@reduxjs/toolkit/query/react';
import Post, { postSchema } from '../../types/responses/Post';
import ReducerNames from '../ReducerNames';
import axiosBaseQuery from '../axiosBaseQuery';

// http://jsonplaceholder.typicode.com/guide/ - docs

const postsApi = createApi({
  reducerPath: ReducerNames.POSTS_API,
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    getPostById: builder.query<Post, string>({
      query: id => ({
        url: `/posts/${id}`,
        method: 'get',
        validationSchema: postSchema,
      }),
    }),
  }),
});

export const { useGetPostByIdQuery } = postsApi;

export default postsApi;
