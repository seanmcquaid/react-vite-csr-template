import { defer } from 'react-router-dom';
import Post from '../../types/responses/Post';
import postsService from '../../services/postsService';
import queryClient from '../../services/queryClient';

export interface PostsLoaderData {
  posts: Promise<Post[]>;
}

export const getPostsQuery = () => ({
  queryKey: ['getPosts'],
  queryFn: () => postsService.getPosts(),
});

const postsLoader = () => {
  const query = getPostsQuery();
  return defer({
    posts:
      queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query),
  });
};

export default postsLoader;
