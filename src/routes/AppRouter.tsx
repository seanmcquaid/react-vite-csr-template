import { FC, Suspense, lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import postsLoader from '../containers/Posts/postsLoader';
import LoadingOverlay from '../components/LoadingOverlay';
import postDetailsLoader from '../containers/PostDetails/postDetailsLoader';
import RouteConstants from './RouteConstants';

const Layout = lazy(() => import('../components/Layout'));
const Posts = lazy(() => import('../containers/Posts'));
const PostDetails = lazy(() => import('../containers/PostDetails'));
const NotFound = lazy(() => import('../containers/NotFound'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={RouteConstants.HOME}
      element={
        <Suspense fallback={<LoadingOverlay isLoading />}>
          <Layout />
        </Suspense>
      }
    >
      <Route
        path={RouteConstants.HOME}
        element={
          <Suspense fallback={<LoadingOverlay isLoading />}>
            <Posts />
          </Suspense>
        }
        loader={postsLoader}
      />
      <Route
        path={RouteConstants.POST_DETAILS}
        element={
          <Suspense fallback={<LoadingOverlay isLoading />}>
            <PostDetails />
          </Suspense>
        }
        loader={postDetailsLoader}
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingOverlay isLoading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>,
  ),
);

const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
