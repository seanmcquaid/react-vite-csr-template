import { AxiosResponse } from 'axios';
import Post from '../types/Post';
import createApiClient from './createApiClient';

const baseURL = 'https://jsonplaceholder.typicode.com';

const client = createApiClient(baseURL);

export interface PostsService {
  getPosts: () => Promise<AxiosResponse<Post[]>>;
}

const postsService: PostsService = {
  getPosts: () => {
    return client.get('/posts');
  },
};

export default postsService;
