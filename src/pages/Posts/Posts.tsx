import { FC, Suspense, useEffect } from 'react';
import {
  ActionFunction,
  Await,
  defer,
  LoaderFunction,
  redirect,
  useFetcher,
  useLoaderData,
} from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Spinner,
} from '@chakra-ui/react';
import { ZetchError } from 'zetch';
import { createToast } from '../../components/Toast';
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
      createToast({
        title: 'Something went wrong',
        description: 'Post ID is missing',
        status: 'error',
      });
      return null;
    }
    const validatedForm = formSchema.safeParse({ postId });

    if (!validatedForm.success) {
      createToast({
        title: 'Something went wrong',
        description: validatedForm.error.message,
        status: 'error',
      });
      return null;
    }

    // Make request to backend directly here instead of using React Query's mutation directly
    await queryClient.invalidateQueries({
      queryKey: ['getPost', validatedForm.data.postId],
    });
    await queryClient.fetchQuery(getPostQuery(validatedForm.data.postId));
    createToast({
      title: 'Post updated',
      description: 'Post has been updated successfully',
      status: 'success',
    });
    return redirect(`/post/${validatedForm.data.postId}`);
  } catch (e) {
    const err = e as ZetchError;
    createToast({
      title: 'Something went wrong',
      description: err.message,
      status: 'error',
    });
    return null;
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
  const {
    register,
    formState: { errors },
    watch,
    reset,
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

  useEffect(() => {
    if (fetcher.state === 'submitting') {
      reset();
    }
  }, [fetcher.state, reset]);

  return (
    <div>
      <Heading>Posts</Heading>
      <fetcher.Form method="post">
        <FormControl isInvalid={!!textErrors}>
          <Input
            data-testid="text-input"
            {...register('postId')}
            disabled={fetcher.state !== 'idle'}
          />
          <FormErrorMessage>{textErrors?.message}</FormErrorMessage>
        </FormControl>
        <Button
          isLoading={fetcher.state !== 'idle'}
          type="submit"
          data-testid="search-button"
        >
          {fetcher.state !== 'idle' ? 'LOADING' : 'Search'}
        </Button>
      </fetcher.Form>
      <Suspense fallback={<Spinner />}>
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
