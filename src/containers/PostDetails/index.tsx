import { FC } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageContainer from '../../components/PageContainer';
import { useGetPostByIdQuery } from '../../store/postsApi';
import PostInfo from './PostInfo';

type PostDetailsParams = {
  id: string;
};

const PostDetails: FC = () => {
  const { id } = useParams<PostDetailsParams>();
  const { data } = useGetPostByIdQuery(id ?? '');

  return (
    <StyledPageContainer data-testid="post-details-container">
      <PostInfo post={data ?? null} />
    </StyledPageContainer>
  );
};

const StyledPageContainer = styled(PageContainer)`
  padding: 16px;
`;

export default PostDetails;
