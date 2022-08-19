import { FC, Suspense } from 'react';
import { DataBrowserRouter, Outlet, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Overlays from '../containers/Overlays';
import PostDetails from '../containers/PostDetails';
import Posts from '../containers/Posts';
import NotFound from '../containers/NotFound';
import loader from '../containers/Posts/loader';
import RouteConstants from './RouteConstants';

const AppRouter: FC = () => {
  return (
    <Suspense fallback={null}>
      <DataBrowserRouter>
        <Route
          path={RouteConstants.HOME}
          element={
            <Layout>
              <Overlays />
              <Outlet />
            </Layout>
          }
        >
          <Route
            path={RouteConstants.HOME}
            element={<Posts />}
            loader={loader}
          />
          <Route path={RouteConstants.POST_DETAILS} element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </DataBrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
