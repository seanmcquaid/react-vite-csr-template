import { FC, lazy, Suspense } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './services/queryClient';

const AppRouter = lazy(() => import('./routes/AppRouter'));

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense>
      <AppRouter />
    </Suspense>
  </QueryClientProvider>
);

export default App;
