import { FC, Suspense, useEffect } from 'react';
import { Await, useFetcher, useLoaderData } from 'react-router-dom';
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
import PostsList from './PostsList';
import { PostsLoaderData } from './postsLoader';

export const formSchema = z.object({
  postId: z
    .string()
    .min(1, 'Text must contain at least 1 characters')
    .max(3, 'Text must contain at most 3 characters'),
});

const Posts: FC = () => {
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

export default Posts;
