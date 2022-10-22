import { FC, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import postsLoader from '../pages/Posts/postsLoader';
import LoadingOverlay from '../components/LoadingOverlay';
import postDetailsLoader from '../pages/PostDetails/postDetailsLoader';
import Root from '../Root';
import RootErrorBoundary from '../RootErrorBoundary';
import RouteConstants from './RouteConstants';

const Posts = lazy(
  () => import(/* webpackChunkName: "Posts" */ '../pages/Posts'),
);
const PostDetails = lazy(
  () => import(/* webpackChunkName: "PostsDetails" */ '../pages/PostDetails'),
);
const NotFound = lazy(
  () => import(/* webpackChunkName: "NotFound" */ '../pages/NotFound'),
);

const router = createBrowserRouter([
  {
    path: RouteConstants.HOME,
    element: <Root />,
    errorElement: <RootErrorBoundary />,
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
  return (
    <RouterProvider
      router={router}
      fallbackElement={<LoadingOverlay isLoading />}
    />
  );
};

export default AppRouter;
