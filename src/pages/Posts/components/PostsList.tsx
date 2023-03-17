import { FC, useMemo, useTransition } from 'react';
import { useAsyncValue, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Post from '../../../types/responses/Post';
import getPostsQuery from '../../../queries/getPostsQuery';
import PostsLoaderData from '../types/PostsLoaderData';
export const filterPostsByText = (text: string, posts: Post[]): Post[] =>
  posts.filter(post => post.title.match(text));

interface PostsListProps {
  filterText: string;
}

const PostsList: FC<PostsListProps> = ({ filterText }) => {
  const initialPosts = useAsyncValue() as Awaited<PostsLoaderData['posts']>;
  const { data: posts } = useQuery({
    ...getPostsQuery(),
    initialData: initialPosts,
  });
  const [, startTransition] = useTransition();
  const navigate = useNavigate();
  const filteredPosts: Post[] = useMemo(
    () => filterPostsByText(filterText, posts ?? []),
    [filterText, posts],
  );

  const handleOnClick = (post: Post): void => {
    startTransition(() => {
      navigate(`post/${post.id}`);
    });
  };

  return (
    <ul>
      {filteredPosts.map(post => (
        <li key={post.id} data-testid="post">
          <button onClick={() => handleOnClick(post)} data-testid="post-button">
            {post.title.substring(0, 5)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
