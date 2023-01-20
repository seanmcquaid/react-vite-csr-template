import { defer, LoaderFunctionArgs } from 'react-router-dom';
import Post from '../../types/responses/Post';
import postsService from '../../services/postsService';
import { queryClient } from '../../main';

export interface PostDetailsLoaderData {
  postInfo: Promise<Post>;
}

export const getPostQuery = (id: string) => ({
  queryKey: ['getPost', id],
  queryFn: async () => postsService.getPost(id),
});

const postDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id) {
    throw new Error('An ID is required');
  }
  const query = getPostQuery(id);

  return defer({
    postInfo:
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query)),
  });
};

export default postDetailsLoader;
