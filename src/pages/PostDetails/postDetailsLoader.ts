import { defer, LoaderFunctionArgs } from 'react-router-dom';
import store from '../../store';
import postsApi from '../../store/postsApi';
import Post from '../../types/responses/Post';

export interface PostDetailsLoaderData {
  postInfo: Post | Promise<Post>;
}

const postDetailsLoader = ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id) {
    throw new Error('An ID is required');
  }
  const { data } = postsApi.endpoints.getPostById.select(id)(store.getState());
  const shouldDefer = !data;
  return defer({
    postInfo: shouldDefer
      ? store.dispatch(postsApi.endpoints.getPostById.initiate(id)).unwrap()
      : data,
  });
};

export default postDetailsLoader;
