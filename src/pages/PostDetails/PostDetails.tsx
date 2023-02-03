import { FC, Suspense } from 'react';
import { Await, useLoaderData, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from '@chakra-ui/react';
import PostInfo from './PostInfo';
import { getPostQuery, PostDetailsLoaderData } from './postDetailsLoader';

type PostDetailsParams = {
  id: string;
};

const PostDetails: FC = () => {
  const { id } = useParams<PostDetailsParams>();
  const { postInfo } = useLoaderData() as PostDetailsLoaderData;
  const { data } = useQuery(getPostQuery(id ?? ''));

  return (
    <div data-testid="post-details-container">
      <Suspense fallback={<Spinner />}>
        <Await resolve={postInfo} errorElement={'ERROR'}>
          <PostInfo post={data ?? null} />
        </Await>
      </Suspense>
    </div>
  );
};

export default PostDetails;
