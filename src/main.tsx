import { lazy, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingOverlay from './components/LoadingOverlay';

export const queryClient = new QueryClient();

const AppRouter = lazy(() => import('./routes/AppRouter'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingOverlay isLoading />}>
        <AppRouter />
      </Suspense>
    </QueryClientProvider>
  </StrictMode>,
);
