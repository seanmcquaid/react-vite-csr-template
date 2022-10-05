import { defer } from 'react-router-dom';
import store from '../../store';
import { getPosts } from '../../store/posts/postsSlice';
import Post from '../../types/Post';

export interface PostsLoaderData {
  posts: Promise<Post[]>;
}

const postsLoader = () => {
  return defer({ posts: store.dispatch(getPosts()).unwrap() });
};

export default postsLoader;
