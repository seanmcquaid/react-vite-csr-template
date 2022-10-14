import { LoaderFunctionArgs } from 'react-router-dom';
import store from '../../store';
import postsApi from '../../store/postsApi';
import Post from '../../types/Post';

const postDetailsLoader = ({
  params,
}: LoaderFunctionArgs): Post | Promise<Post> => {
  const { id } = params;
  if (!id) {
    throw new Error('An ID is required');
  }
  const { data } = postsApi.endpoints.getPostById.select(id)(store.getState());
  return (
    data ?? store.dispatch(postsApi.endpoints.getPostById.initiate(id)).unwrap()
  );
};

export default postDetailsLoader;
