import store from '../../store';
import { getPosts } from '../../store/posts/postsSlice';

const postsLoader = () => {
  return store.dispatch(getPosts());
};

export default postsLoader;
