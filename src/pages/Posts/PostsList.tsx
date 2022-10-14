import { FC, useMemo, useTransition } from 'react';
import styled from 'styled-components';
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
  const [, startTransition] = useTransition();
  const navigate = useNavigate();
  const posts = useAppSelector(selectPosts);
  const filteredPosts: Post[] = useMemo(
    () => filterPostsByText(filterText, posts),
    [filterText, posts],
  );

  const handleOnClick = (post: Post): void => {
    startTransition(() => {
      navigate(`post/${post.id}`);
    });
  };

  return (
    <StyledList>
      {filteredPosts.map(post => (
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
  max-height: 600px;
  overflow: auto;
`;

const StyledListItem = styled.li`
  margin: 4px 0;
  padding: 8px;
`;

const StyledPlainTextButton = styled.button``;

export default PostsList;
