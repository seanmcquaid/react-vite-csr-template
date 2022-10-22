import { FC } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import LoadingOverlay from '../LoadingOverlay';
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
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
