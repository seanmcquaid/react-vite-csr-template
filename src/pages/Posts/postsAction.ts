import { ActionFunctionArgs, redirect } from 'react-router-dom';
import queryClient from '../../services/queryClient';
import { formSchema } from './Posts';

const postsAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const postId = formData.get('postId');
  if (!postId) {
    throw new Error('An ID is required');
  }
  const validatedForm = formSchema.safeParse({ postId });

  if (!validatedForm.success) {
    throw new Error(validatedForm.error.message);
  }

  // Make request to backend directly here instead of using React Query's mutation directly
  await queryClient.invalidateQueries({
    queryKey: ['getPost', validatedForm.data.postId],
  });
  return redirect(`/post/${validatedForm.data.postId}`);
};

export default postsAction;
