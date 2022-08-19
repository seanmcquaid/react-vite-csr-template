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
    <DataBrowserRouter>
      <Route
        path={RouteConstants.HOME}
        element={
          <Suspense fallback={null}>
            <Layout>
              <Overlays />
              <Outlet />
            </Layout>
          </Suspense>
        }
      >
        <Route
          path={RouteConstants.HOME}
          element={
            <Suspense fallback={null}>
              <Posts />
            </Suspense>
          }
          loader={postsLoader}
        />
        <Route
          path={RouteConstants.POST_DETAILS}
          element={
            <Suspense fallback={null}>
              <PostDetails />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={null}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </DataBrowserRouter>
  );
};

export default AppRouter;
