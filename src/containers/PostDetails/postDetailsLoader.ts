import { LoaderFunction } from 'react-router-dom';
import store from '../../store';
import postsApi from '../../store/postsApi';

const postDetailsLoader: LoaderFunction = ({ params }) => {
  const { id } = params;
  if (!id) {
    throw new Error('ID is required');
  }
  return store.dispatch(postsApi.endpoints.getPostById.initiate(id));
};

export default postDetailsLoader;
