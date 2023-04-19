import { FC, Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import PageError from '../../components/PageError';
import PostInfo from './components/PostInfo';
import PostDetailsLoaderData from './types/PostDetailsLoaderData';

export const Component: FC = () => {
  const { postInfo } = useLoaderData() as PostDetailsLoaderData;

  return (
    <div data-testid="post-details-container">
      <Suspense fallback={'loading'}>
        <Await resolve={postInfo} errorElement={'ERROR'}>
          <PostInfo />
        </Await>
      </Suspense>
    </div>
  );
};

export const ErrorBoundary: FC = () => {
  return <PageError errorText={'Error loading posts'} />;
};
