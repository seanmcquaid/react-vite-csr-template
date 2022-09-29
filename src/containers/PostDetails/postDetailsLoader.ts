import { LoaderFunction } from 'react-router-dom';
import store from '../../store';
import postsApi from '../../store/postsApi';

const postDetailsLoader: LoaderFunction = ({ params }) => {
  const { id } = params;
  if (!id) {
    return;
  }
  const { data } = postsApi.endpoints.getPostById.select(id)(store.getState());
  return data ?? store.dispatch(postsApi.endpoints.getPostById.initiate(id));
};

export default postDetailsLoader;
