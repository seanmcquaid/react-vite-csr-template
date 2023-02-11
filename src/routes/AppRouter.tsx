import { FC, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import postsLoader from '../pages/Posts/postsLoader';
import postDetailsLoader from '../pages/PostDetails/postDetailsLoader';
import Layout from '../components/Layout';
import postsAction from '../pages/Posts/postsAction';
import PageError from '../components/PageError';
import RootErrorBoundary from './RootErrorBoundary';
import RouteConstants from './RouteConstants';

const Posts = lazy(() => import('../pages/Posts/Posts'));
const PostDetails = lazy(() => import('../pages/PostDetails/PostDetails'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const router = createBrowserRouter([
  {
    path: RouteConstants.HOME,
    element: <Layout />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: RouteConstants.HOME,
        element: <Posts />,
        loader: postsLoader,
        action: postsAction,
        errorElement: <PageError errorText={'Error loading posts'} />,
      },
      {
        path: RouteConstants.POST_DETAILS,
        element: <PostDetails />,
        loader: postDetailsLoader,
        errorElement: <PageError errorText={'Error loading post'} />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
