import { FC, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import postsLoader from '../pages/Posts/postsLoader';
import LoadingOverlay from '../components/LoadingOverlay';
import postDetailsLoader from '../pages/PostDetails/postDetailsLoader';
import Layout from '../components/Layout';
import RouterErrorBoundary from './RouterErrorBoundary';
import RouteConstants from './RouteConstants';

const Posts = lazy(() => import('../pages/Posts'));
const PostDetails = lazy(() => import('../pages/PostDetails'));
const NotFound = lazy(() => import('../pages/NotFound'));

const router = createBrowserRouter([
  {
    path: RouteConstants.HOME,
    element: <Layout />,
    errorElement: <RouterErrorBoundary />,
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
