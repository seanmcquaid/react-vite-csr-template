import { LoaderFunction } from 'react-router-dom';
import store from '../../store';
import { getPosts } from '../../store/posts/postsSlice';

const loader: LoaderFunction = () => {
  return store.dispatch(getPosts());
};

export default loader;
