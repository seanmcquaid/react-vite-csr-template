import { FC, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import postsLoader from '../pages/Posts/postsLoader';
import LoadingOverlay from '../components/LoadingOverlay';
import postDetailsLoader from '../pages/PostDetails/postDetailsLoader';
import App from '../App';
import RootErrorBoundary from './RootErrorBoundary';
import RouteConstants from './RouteConstants';

const Posts = lazy(() => import('../pages/Posts/Posts'));
const PostDetails = lazy(() => import('../pages/PostDetails/PostDetails'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const router = createBrowserRouter([
  {
    path: RouteConstants.HOME,
    element: <App />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: RouteConstants.HOME,
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: RouteConstants.POST_DETAILS,
        element: <PostDetails />,
        loader: postDetailsLoader,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const AppRouter: FC = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<LoadingOverlay isLoading />}
    />
  );
};

export default AppRouter;
