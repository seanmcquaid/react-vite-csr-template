import { AxiosResponse } from 'axios';
import { z } from 'zod';
import Post, { PostSchema } from '../types/Post';
import createApiClient from './createApiClient';

const baseURL = 'https://jsonplaceholder.typicode.com';

const client = createApiClient(baseURL);

export interface PostsService {
  getPosts: () => Promise<AxiosResponse<Post[]>>;
}

const postsService: PostsService = {
  getPosts: () => {
    return client.get<Post[]>('/posts').then(response => {
      const validationResults = z.array(PostSchema).safeParse(response.data);
      if (!validationResults.success) {
        console.log(
          'log this to error logging service',
          validationResults.error,
        );
      }
      return response;
    });
  },
};

export default postsService;
