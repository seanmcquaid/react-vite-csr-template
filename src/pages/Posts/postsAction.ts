import toast from 'react-hot-toast';
import { ActionFunctionArgs, redirect } from 'react-router-dom';
import queryClient from '../../services/queryClient';
import { getPostQuery } from '../PostDetails/postDetailsLoader';
import { formSchema } from './Posts';

const postsAction = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const postId = formData.get('postId');
    if (!postId) {
      toast.error('An ID is required');
      return null;
    }
    const validatedForm = formSchema.safeParse({ postId });

    if (!validatedForm.success) {
      toast.error(validatedForm.error.message);
      return null;
    }

    // Make request to backend directly here instead of using React Query's mutation directly
    await queryClient.invalidateQueries({
      queryKey: ['getPost', validatedForm.data.postId],
    });
    await queryClient.fetchQuery(getPostQuery(validatedForm.data.postId));
    toast.success('Changed post');
    return redirect(`/post/${validatedForm.data.postId}`);
  } catch (e) {
    toast.error('Something went wrong');
    return null;
  }
};

export default postsAction;
