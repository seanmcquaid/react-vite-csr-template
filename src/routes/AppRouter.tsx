import { FC, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import postsLoader from '../pages/Posts/postsLoader';
import Layout from '../components/Layout';
import postsAction from '../pages/Posts/postsAction';
import PageError from '../components/PageError';
import RootErrorBoundary from './RootErrorBoundary';
import RouteConstants from './RouteConstants';

const Posts = lazy(() => import('../pages/Posts/Posts'));
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
        lazy: () => import('../pages/PostDetails/PostDetails'),
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
