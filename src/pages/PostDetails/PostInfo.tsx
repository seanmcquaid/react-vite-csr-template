import { FC } from 'react';
import { useAsyncValue, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import getPostQuery from '../../queries/getPostQuery';
import PostDetailsLoaderData from './types/PostDetailsLoaderData';

type PostDetailsParams = {
  id: string;
};

const PostInfo: FC = () => {
  const { id } = useParams<PostDetailsParams>();
  const initialPostInfo = useAsyncValue() as Awaited<
    PostDetailsLoaderData['postInfo']
  >;
  const { data } = useQuery({
    ...getPostQuery(id ?? ''),
    initialData: initialPostInfo,
  });

  return (
    <div data-testid="post-info">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default PostInfo;
