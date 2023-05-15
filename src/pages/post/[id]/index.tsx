import { FC, Suspense } from 'react';
import { Await, LoaderFunction, defer, useLoaderData } from 'react-router-dom';
import PageError from '../../../components/PageError';
import getPostQuery from '../../../queries/getPostQuery';
import queryClient from '../../../services/queryClient';
import PostInfo from '../../../components/PostInfo';
import PostDetailsLoaderData from './PostDetailsLoaderData';

export const Loader: LoaderFunction = ({ params }) => {
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

export const ErrorBoundary: FC = () => {
  return <PageError errorText={'Error loading posts'} />;
};

const Page: FC = () => {
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

export default Page;
