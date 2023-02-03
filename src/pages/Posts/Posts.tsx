import { FC, Suspense } from 'react';
import { Await, useFetcher, useLoaderData } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Spinner } from '@chakra-ui/react';
import PostsList from './PostsList';
import { PostsLoaderData } from './postsLoader';

export const formSchema = z.object({
  postId: z
    .string()
    .min(3, 'Text must contain at least 3 characters')
    .max(10, 'Text must contain at most 10 characters'),
});

const Posts: FC = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postId: '',
    },
    mode: 'all',
  });
  const fetcher = useFetcher();
  const { posts } = useLoaderData() as PostsLoaderData;
  const textErrors = errors?.postId;
  return (
    <div>
      <h1>Posts</h1>
      {/*<Form method="post">*/}
      {/*  <div>*/}
      {/*    <input data-testid="text-input" {...register('text')} />*/}
      {/*    {textErrors?.message && <p>{textErrors?.message}</p>}*/}
      {/*  </div>*/}
      {/*  <button data-testid="clear-button" disabled={!!textErrors}>*/}
      {/*    Submit*/}
      {/*  </button>*/}
      {/*</Form>*/}
      <fetcher.Form method="post">
        <div>
          <input
            data-testid="text-input"
            {...register('postId')}
            disabled={fetcher.state !== 'idle'}
          />
          {textErrors?.message && <p>{textErrors?.message}</p>}
        </div>
        <button disabled={fetcher.state !== 'idle'}>
          {fetcher.state !== 'idle' ? 'LOADING' : 'Search'}
        </button>
      </fetcher.Form>
      <Suspense fallback={<Spinner />}>
        <Await resolve={posts} errorElement={'ERROR'}>
          <PostsList filterText={watch('postId')} />
        </Await>
      </Suspense>
    </div>
  );
};

export default Posts;
