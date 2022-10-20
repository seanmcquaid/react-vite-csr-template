import { FC, useDeferredValue } from 'react';
import Post from '../../types/Post';

interface PostInfoProps {
  post: Post | null;
}

const PostInfo: FC<PostInfoProps> = ({ post }) => {
  // This hook is commonly used to keep the interface responsive when you have something that renders immediately based on user input and something that needs to wait for a data fetch.
  // A good example of this is a text input that triggers an additional change on the page due to a state change in a 3rd party library where we can't control state.
  // For example, using RTK query to handle fetching the data but we can't explictly control if/when the data is done loading
  const postInfo = useDeferredValue(post);

  if (!postInfo) {
    return null;
  }

  return (
    <div data-testid="post-info">
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default PostInfo;
