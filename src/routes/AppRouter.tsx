import { FC, lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const AppRoutes = lazy(() => import('./AppRoutes'));

const AppRouter: FC = () => (
  <Suspense fallback={null}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Suspense>
);

export default AppRouter;
