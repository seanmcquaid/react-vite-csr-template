import { z } from 'zod';
import { postSchema } from '../types/responses/Post';
import createApiClient from './createApiClient';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const client = createApiClient(baseUrl);

const postsService = {
  getPosts: () =>
    client.get('/posts', { validationSchema: z.array(postSchema) }),
  getPost: (id: string) =>
    client.get(`/posts/${id}`, { validationSchema: postSchema }),
} as const;

export default postsService;
