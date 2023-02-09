import { FC, Suspense } from 'react';
import {
  Await,
  useAsyncValue,
  useLoaderData,
  useParams,
} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from '@chakra-ui/react';
import PostInfo from './PostInfo';
import { getPostQuery, PostDetailsLoaderData } from './postDetailsLoader';

type PostDetailsParams = {
  id: string;
};

const PostDetails: FC = () => {
  const { id } = useParams<PostDetailsParams>();
  const initialPostInfo = useAsyncValue() as Awaited<
    PostDetailsLoaderData['postInfo']
  >;
  const { postInfo } = useLoaderData() as PostDetailsLoaderData;
  const { data } = useQuery({
    ...getPostQuery(id ?? ''),
    initialData: initialPostInfo,
  });

  return (
    <div data-testid="post-details-container">
      <Suspense fallback={<Spinner />}>
        <Await resolve={postInfo} errorElement={'ERROR'}>
          <PostInfo post={data} />
        </Await>
      </Suspense>
    </div>
  );
};

export default PostDetails;
