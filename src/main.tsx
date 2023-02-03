import { lazy, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import LoadingOverlay from './components/LoadingOverlay';
import queryClient from './services/queryClient';

const AppRouter = lazy(() => import('./routes/AppRouter'));

if (
  import.meta.env.MODE === 'development' &&
  Boolean(import.meta.env.VITE_APP_MSW_ENABLED)
) {
  import('./mocks/worker').then(worker => worker.default.start());
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-center" />
      <Suspense fallback={<LoadingOverlay isLoading />}>
        <AppRouter />
      </Suspense>
    </QueryClientProvider>
  </StrictMode>,
);
