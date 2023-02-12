import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import Toast from '../Toast';
import Navbar from './Navbar';

const Layout: FC = () => {
  return (
    <div>
      <Navbar />
      <Toast />
      <div>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
