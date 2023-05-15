import { FC } from 'react';
import { useAsyncValue } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import getPostQuery from '../../../../queries/getPostQuery';
import { useParams } from '../../../../router';
import PostDetailsLoaderData from '../types/PostDetailsLoaderData';

const PostInfo: FC = () => {
  const { id } = useParams('/post/:id');
  const initialPostInfo = useAsyncValue() as Awaited<
    PostDetailsLoaderData['postInfo']
  >;
  const { data } = useQuery({
    ...getPostQuery(id),
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
