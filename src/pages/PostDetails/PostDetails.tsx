import { FC, Suspense } from 'react';
import { Await, defer, LoaderFunction, useLoaderData } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import queryClient from '../../services/queryClient';
import getPostQuery from '../../queries/getPostQuery';
import PageError from '../../components/PageError';
import PostInfo from './PostInfo';
import PostDetailsLoaderData from './types/PostDetailsLoaderData';

export const loader: LoaderFunction = ({ params }) => {
  const { id } = params;
  if (!id) {
    throw new Error('An ID is required');
  }
  const query = getPostQuery(id);

  return defer({
    postInfo:
      queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query),
  });
};

export const Component: FC = () => {
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

export const ErrorBoundary: FC = () => {
  return <PageError errorText={'Error loading posts'} />;
};
