import { FC, Suspense, useEffect } from 'react';
import {
  ActionFunction,
  Await,
  defer,
  json,
  LoaderFunction,
  redirect,
  useFetcher,
  useLoaderData,
} from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZetchError } from 'zetch';
import queryClient from '../../services/queryClient';
import getPostQuery from '../../queries/getPostQuery';
import getPostsQuery from '../../queries/getPostsQuery';
import PageError from '../../components/PageError';
import PostsList from './components/PostsList';
import PostsLoaderData from './types/PostsLoaderData';

const formSchema = z.object({
  postId: z
    .string()
    .min(1, 'Text must contain at least 1 characters')
    .max(3, 'Text must contain at most 3 characters'),
});

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const postId = formData.get('postId');
    if (!postId) {
      return null;
    }
    const validatedForm = formSchema.safeParse({ postId });

    if (!validatedForm.success) {
      return null;
    }

    // Make request to backend directly here instead of using React Query's mutation directly
    await queryClient.invalidateQueries({
      queryKey: ['getPost', validatedForm.data.postId],
    });
    await queryClient.fetchQuery(getPostQuery(validatedForm.data.postId));
    return redirect(`/post/${validatedForm.data.postId}`);
  } catch (e) {
    const err = e as ZetchError;
    return json({ err });
  }
};

export const loader: LoaderFunction = () => {
  const query = getPostsQuery();
  return defer({
    posts:
      queryClient.getQueryData(query.queryKey) ?? queryClient.fetchQuery(query),
  });
};

export const Component: FC = () => {
  const { register, watch, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postId: '',
    },
    mode: 'all',
  });
  const fetcher = useFetcher();
  const { posts } = useLoaderData() as PostsLoaderData;

  useEffect(() => {
    if (fetcher.state === 'submitting') {
      reset();
    }
  }, [fetcher.state, reset]);

  return (
    <div>
      <h1>Posts</h1>
      <fetcher.Form method="post">
        <input
          data-testid="text-input"
          {...register('postId')}
          disabled={fetcher.state !== 'idle'}
        />
        <button
          disabled={fetcher.state !== 'idle'}
          type="submit"
          data-testid="search-button"
        >
          {fetcher.state !== 'idle' ? 'LOADING' : 'Search'}
        </button>
      </fetcher.Form>
      <Suspense fallback={'loading'}>
        <Await resolve={posts} errorElement={'ERROR'}>
          <PostsList filterText={watch('postId')} />
        </Await>
      </Suspense>
    </div>
  );
};

export const ErrorBoundary: FC = () => {
  return <PageError errorText={'Error loading post'} />;
};
