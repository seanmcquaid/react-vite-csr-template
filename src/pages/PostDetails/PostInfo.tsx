import { FC } from 'react';
import Post from '../../types/responses/Post';

interface PostInfoProps {
  post: Post | null;
}

const PostInfo: FC<PostInfoProps> = ({ post }) => {
  if (!post) {
    return null;
  }

  return (
    <div data-testid="post-info">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostInfo;
