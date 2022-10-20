import { FC } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import LoadingOverlay from '../LoadingOverlay';
import ErrorBoundary from '../../ErrorBoundary';
import Navbar from './Navbar';

const Layout: FC = () => {
  const navigation = useNavigation();
  const isNavigating =
    navigation.state === 'loading' || navigation.state === 'submitting';

  return (
    <div>
      <Navbar />
      <div>
        <LoadingOverlay isLoading={isNavigating} />
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Layout;
