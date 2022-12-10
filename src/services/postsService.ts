import { z } from 'zod';
import Post, { postSchema } from '../types/responses/Post';
import createApiClient from './createApiClient';

const baseURL = 'https://jsonplaceholder.typicode.com';

const client = createApiClient(baseURL);

interface PostsService {
  getPosts: () => Promise<Post[]>;
}

const postsService: PostsService = {
  getPosts: () =>
    client.get('/posts', { validationSchema: z.array(postSchema) }),
};

export default postsService;
