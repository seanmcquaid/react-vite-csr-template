import { FC } from 'react';
import LoadingOverlay from '../../components/LoadingOverlay';
import { useAppSelector } from '../../store/hooks';
import { selectIsGetPostsLoading } from '../../store/posts/postsSelectors';

const Overlays: FC = () => {
  const isGetPostsLoading = useAppSelector(selectIsGetPostsLoading);
  const isLoading = isGetPostsLoading;
  return <LoadingOverlay isLoading={isLoading} />;
};

export default Overlays;
