import { lazy, startTransition, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import env from './env';

const App = lazy(() => import('./App'));

const prepare = async () => {
  if (env.MODE === 'development') {
    const worker = await import('./mocks/worker');
    return worker.default.start({ onUnhandledRequest: 'bypass' });
  }
  return Promise.resolve();
};

prepare().then(() =>
  startTransition(() => {
    createRoot(document.getElementById('root') as HTMLElement).render(
      <StrictMode>
        <Suspense>
          <App />
        </Suspense>
      </StrictMode>,
    );
  }),
);
