import { FC } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import PageContainer from '../../components/PageContainer';
import { useGetPostByIdQuery } from '../../store/postsApi';
import PostInfo from './PostInfo';

type PostDetailsParams = {
  id: string;
};

const PostDetails: FC = () => {
  const { id } = useParams<PostDetailsParams>();
  const { data, isLoading } = useGetPostByIdQuery(id ?? '', {
    skip: !id?.length,
  });

  return (
    <StyledPageContainer data-testid="post-details-container">
      <ClipLoader loading={isLoading} />
      <PostInfo post={data ?? null} />
    </StyledPageContainer>
  );
};

const StyledPageContainer = styled(PageContainer)`
  justify-content: flex-start;
`;

export default PostDetails;
