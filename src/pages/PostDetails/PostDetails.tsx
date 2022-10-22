import { FC, Suspense } from 'react';
import { Await, useLoaderData, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGetPostByIdQuery } from '../../store/postsApi';
import PostInfo from './PostInfo';
import { PostDetailsLoaderData } from './postDetailsLoader';

type PostDetailsParams = {
  id: string;
};

const PostDetails: FC = () => {
  const { id } = useParams<PostDetailsParams>();
  const { postInfo } = useLoaderData() as PostDetailsLoaderData;
  const { data } = useGetPostByIdQuery(id ?? '', {
    skip: !id?.length,
  });

  return (
    <div data-testid="post-details-container">
      <Suspense fallback={<ClipLoader loading />}>
        <Await resolve={postInfo} errorElement={'ERROR'}>
          <PostInfo post={data ?? null} />
        </Await>
      </Suspense>
    </div>
  );
};

export default PostDetails;
