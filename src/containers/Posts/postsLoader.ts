import { LoaderFunction } from 'react-router-dom';
import store from '../../store';
import { getPosts } from '../../store/posts/postsSlice';

const postsLoader: LoaderFunction = () => {
  return store.dispatch(getPosts());
};

export default postsLoader;
