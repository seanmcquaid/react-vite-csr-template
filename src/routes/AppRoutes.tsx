import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RouteConstants from './RouteConstants';

const Posts = lazy(() => import('../containers/Posts'));
const PostDetails = lazy(() => import('../containers/PostDetails'));
const NotFound = lazy(() => import('../containers/NotFound'));

const AppRoutes: FC = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route path={RouteConstants.HOME} element={<Posts />} />
      <Route path={RouteConstants.POST_DETAILS} element={<PostDetails />} />
      <Route element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
