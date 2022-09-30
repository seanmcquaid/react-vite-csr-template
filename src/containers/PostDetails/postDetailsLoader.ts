import { LoaderFunctionArgs } from 'react-router-dom';
import store from '../../store';
import postsApi from '../../store/postsApi';
import Post from '../../types/Post';

const postDetailsLoader = ({
  params,
}: LoaderFunctionArgs): Post | undefined | Promise<Post> => {
  const { id } = params;
  if (!id) {
    return;
  }
  const { data } = postsApi.endpoints.getPostById.select(id)(store.getState());
  return (
    data ?? store.dispatch(postsApi.endpoints.getPostById.initiate(id)).unwrap()
  );
};

export default postDetailsLoader;
