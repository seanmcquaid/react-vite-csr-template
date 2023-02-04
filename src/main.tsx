import { lazy, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import queryClient from './services/queryClient';
import Toast from './components/Toast';

const AppRouter = lazy(() => import('./routes/AppRouter'));

if (
  import.meta.env.MODE === 'development' &&
  Boolean(import.meta.env.VITE_APP_MSW_ENABLED)
) {
  import('./mocks/worker').then(worker => worker.default.start());
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Toast />
        <Suspense>
          <AppRouter />
        </Suspense>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
);
