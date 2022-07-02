import { FC, useEffect } from 'react';
import PageContainer from '../../components/PageContainer';
import { useAppDispatch } from '../../store/hooks';
import { getPosts } from '../../store/posts/postsSlice';

const Posts: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <PageContainer></PageContainer>;
};

export default Posts;
