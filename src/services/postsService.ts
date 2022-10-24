import { z } from 'zod';
import Post, { PostSchema } from '../types/Post';
import createApiClient from './createApiClient';

const baseURL = 'https://jsonplaceholder.typicode.com';

const client = createApiClient(baseURL);

const postsService = {
  getPosts: () =>
    client
      .get<Post[]>('/posts', { validationSchema: z.array(PostSchema) })
      .then(response => {
        return response.data;
      }),
};

export default postsService;
