import { FC } from 'react';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
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
    <div data-testid="post-details-container">
      <ClipLoader loading={isLoading} />
      <PostInfo post={data ?? null} />
    </div>
  );
};

export default PostDetails;
