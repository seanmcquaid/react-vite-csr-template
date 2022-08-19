import { FC, Suspense, lazy } from 'react';
import { DataBrowserRouter, Outlet, Route } from 'react-router-dom';
import postsLoader from '../containers/Posts/postsLoader';
import RouteConstants from './RouteConstants';

const Layout = lazy(() => import('../components/Layout'));
const Overlays = lazy(() => import('../containers/Overlays'));
const Posts = lazy(() => import('../containers/Posts'));
const PostDetails = lazy(() => import('../containers/PostDetails'));
const NotFound = lazy(() => import('../containers/NotFound'));

const AppRouter: FC = () => {
  return (
    <Suspense fallback={null}>
      <DataBrowserRouter>
        <Route
          path={RouteConstants.HOME}
          element={
            <Layout>
              <Overlays />
              <Outlet />
            </Layout>
          }
        >
          <Route
            path={RouteConstants.HOME}
            element={<Posts />}
            loader={postsLoader}
          />
          <Route path={RouteConstants.POST_DETAILS} element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </DataBrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
