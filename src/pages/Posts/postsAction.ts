import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { ZetchError } from 'zetch';
import queryClient from '../../services/queryClient';
import { getPostQuery } from '../PostDetails/postDetailsLoader';
import { createToast } from '../../components/Toast';
import { formSchema } from './Posts';

const postsAction = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const postId = formData.get('postId');
    console.log(postId);
    if (!postId) {
      createToast({
        title: 'Something went wrong',
        description: 'Post ID is missing',
        status: 'error',
      });
      return null;
    }
    const validatedForm = formSchema.safeParse({ postId });

    console.log(validatedForm);

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

export default postsAction;
