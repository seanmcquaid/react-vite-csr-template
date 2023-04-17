import { z } from 'zod';
import { postSchema } from '../types/responses/Post';
import createApiClient from './createApiClient';
import validateResponse from './validateResponse';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const client = createApiClient(baseUrl);

const postsService = {
  getPosts: () =>
    validateResponse({
      response: client.get('posts'),
      validationSchema: z.array(postSchema),
    }),
  getPost: (id: string) =>
    validateResponse({
      response: client.get(`posts/${id}`),
      validationSchema: postSchema,
    }),
} as const;

export default postsService;
