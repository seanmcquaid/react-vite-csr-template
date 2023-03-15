import { lazy, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import queryClient from './services/queryClient';
import env from './env';

const AppRouter = lazy(() => import('./routes/AppRouter'));

if (env.MODE === 'development' && env.VITE_APP_MSW_ENABLED) {
  import('./mocks/worker').then(worker => worker.default.start());
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <AppRouter />
        </Suspense>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
);
