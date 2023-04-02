import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouteConstants from './RouteConstants';

const router = createBrowserRouter([
  {
    path: RouteConstants.HOME,
    lazy: () => import('./Root'),
    children: [
      {
        path: RouteConstants.HOME,
        lazy: () => import('../pages/Posts/Posts'),
      },
      {
        path: RouteConstants.POST_DETAILS,
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
