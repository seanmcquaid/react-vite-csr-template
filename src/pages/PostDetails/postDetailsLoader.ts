import { defer, LoaderFunctionArgs } from 'react-router-dom';
import Post from '../../types/responses/Post';
import postsService from '../../services/postsService';
import queryClient from '../../services/queryClient';

export interface PostDetailsLoaderData {
  postInfo: Promise<Post>;
}

export const getPostQuery = (id: string) => ({
  queryKey: ['getPost', id],
  queryFn: async () => postsService.getPost(id),
});

const postDetailsLoader = ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id) {
    throw new Error('An ID is required');
  }
  const query = getPostQuery(id);

  return defer({
    postInfo:
      queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query),
  });
};

export default postDetailsLoader;
