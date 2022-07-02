import { FC, useTransition } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Post from '../../types/Post';
import { usePrefetch } from '../../store/postsApi';

interface PostsListProps {
  posts: Post[];
}

const PostsList: FC<PostsListProps> = ({ posts }) => {
  const [, startTransition] = useTransition();
  const navigate = useNavigate();
  const prefetchPost = usePrefetch('getPostById');

  const handleOnClick = (post: Post): void => {
    startTransition(() => {
      prefetchPost(post.id.toString());
      navigate(`post/${post.id}`);
    });
  };

  return (
    <StyledList>
      {posts.map(post => (
        <StyledListItem key={post.id} data-testid="post">
          <StyledPlainTextButton
            onClick={() => handleOnClick(post)}
            data-testid="post-button"
          >
            {post.title}
          </StyledPlainTextButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  list-style: none;
  margin: 32px 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin: 4px 0;
  padding: 8px;
`;

const StyledPlainTextButton = styled.button``;

export default PostsList;
