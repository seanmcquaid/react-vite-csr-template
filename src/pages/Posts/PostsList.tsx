import { FC, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../../types/Post';
import { useAppSelector } from '../../store/hooks';
import { selectPosts } from '../../store/posts/postsSelectors';

const filterPostsByText = (text: string, posts: Post[]): Post[] =>
  posts.filter(post => post.title.match(text));

interface PostsListProps {
  filterText: string;
}

const PostsList: FC<PostsListProps> = ({ filterText }) => {
  const navigate = useNavigate();
  const posts = useAppSelector(selectPosts);
  const filteredPosts: Post[] = useMemo(
    () => filterPostsByText(filterText, posts),
    [filterText, posts],
  );

  const handleOnClick = (post: Post): void => {
    navigate(`post/${post.id}`);
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
