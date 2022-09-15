import { FC } from 'react';
import { useNavigation } from 'react-router-dom';
import LoadingOverlay from '../../components/LoadingOverlay';
import { useAppSelector } from '../../store/hooks';
import { selectIsGetPostsLoading } from '../../store/posts/postsSelectors';
import { selectIsPostsApiLoading } from '../../store/postsApi/postsApiSelectors';

const Overlays: FC = () => {
  const isPostApiLoading = useAppSelector(selectIsPostsApiLoading);
  const isGetPostsLoading = useAppSelector(selectIsGetPostsLoading);
  const navigation = useNavigation();
  const isNavigating =
    navigation.state === 'loading' || navigation.state === 'submitting';
  const isLoading = isGetPostsLoading || isPostApiLoading || isNavigating;
  return <LoadingOverlay isLoading={isLoading} />;
};

export default Overlays;
