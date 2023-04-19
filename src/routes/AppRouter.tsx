import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import postsDetailsLoader from '../pages/PostDetails/postDetailsLoader.ts';
import postsLoader from '../pages/Posts/postsLoader.ts';
import RouteConstants from './RouteConstants';

const router = createBrowserRouter([
  {
    path: RouteConstants.HOME,
    lazy: () => import('./Root'),
    children: [
      {
        path: RouteConstants.HOME,
        loader: postsLoader,
        lazy: () => import('../pages/Posts/Posts'),
      },
      {
        path: RouteConstants.POST_DETAILS,
        loader: postsDetailsLoader,
        lazy: () => import('../pages/PostDetails/PostDetails'),
      },
      {
        path: '*',
        lazy: () => import('../pages/NotFound/NotFound'),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
