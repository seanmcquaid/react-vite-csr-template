import { FC, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import postsLoader from '../pages/Posts/postsLoader';
import LoadingOverlay from '../components/LoadingOverlay';
import postDetailsLoader from '../pages/PostDetails/postDetailsLoader';
import FullAppError from '../pages/FullAppError';
import RouteConstants from './RouteConstants';

const Layout = lazy(() => import('../components/Layout'));
const Posts = lazy(() => import('../pages/Posts'));
const PostDetails = lazy(() => import('../pages/PostDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));

const router = createBrowserRouter([
  {
    path: RouteConstants.HOME,
    element: (
      <Suspense fallback={<LoadingOverlay isLoading />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <FullAppError />,
    children: [
      {
        path: RouteConstants.HOME,
        element: (
          <Suspense fallback={<LoadingOverlay isLoading />}>
            <Posts />
          </Suspense>
        ),
        loader: postsLoader,
      },
      {
        path: RouteConstants.POST_DETAILS,
        element: (
          <Suspense fallback={<LoadingOverlay isLoading />}>
            <PostDetails />
          </Suspense>
        ),
        loader: postDetailsLoader,
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingOverlay isLoading />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
