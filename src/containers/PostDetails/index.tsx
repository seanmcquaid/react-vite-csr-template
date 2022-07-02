import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../store/postsApi';

const PostDetails: FC = () => {
  const { id } = useParams();
  const { data } = useGetPostByIdQuery(id ?? '');
  return <></>;
};

export default PostDetails;
