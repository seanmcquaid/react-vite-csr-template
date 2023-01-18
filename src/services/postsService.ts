import { z } from 'zod';
import { postSchema } from '../types/responses/Post';
import createApiClient from './createApiClient';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const client = createApiClient(baseUrl);

const postsService = {
  getPosts: () =>
    client.get('/posts', { validationSchema: z.array(postSchema) }),
} as const;

export default postsService;
