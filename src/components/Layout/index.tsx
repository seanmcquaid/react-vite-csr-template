import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout: FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
