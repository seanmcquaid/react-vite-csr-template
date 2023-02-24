import { FC, Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import PostInfo from './PostInfo';
import { PostDetailsLoaderData } from './postDetailsLoader';

const PostDetails: FC = () => {
  const { postInfo } = useLoaderData() as PostDetailsLoaderData;

  return (
    <div data-testid="post-details-container">
      <Suspense fallback={<Spinner />}>
        <Await resolve={postInfo} errorElement={'ERROR'}>
          <PostInfo />
        </Await>
      </Suspense>
    </div>
  );
};

export default PostDetails;
