import { defer } from 'react-router-dom';
import Post from '../../types/responses/Post';
import postsService from '../../services/postsService';
import { queryClient } from '../../main';

export interface PostsLoaderData {
  posts: Promise<Post[]>;
}

export const getPostsQuery = () => ({
  queryKey: ['getPosts'],
  queryFn: () => postsService.getPosts(),
});

const postsLoader = async () => {
  const query = getPostsQuery();
  return defer({
    posts:
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query)),
  });
};

export default postsLoader;
