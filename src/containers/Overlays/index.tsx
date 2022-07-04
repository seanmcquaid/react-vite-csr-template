import { FC } from 'react';
import LoadingOverlay from '../../components/LoadingOverlay';
import { useAppSelector } from '../../store/hooks';
import { selectIsGetPostsLoading } from '../../store/posts/postsSelectors';
import { selectIsPostsApiLoading } from '../../store/postsApi/postsApiSelectors';

const Overlays: FC = () => {
  const isPostApiLoading = useAppSelector(selectIsPostsApiLoading);
  const isGetPostsLoading = useAppSelector(selectIsGetPostsLoading);
  const isLoading = isGetPostsLoading || isPostApiLoading;
  return <LoadingOverlay isLoading={isLoading} />;
};

export default Overlays;
