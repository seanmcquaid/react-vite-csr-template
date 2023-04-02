import { lazy, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import env from './env';

const App = lazy(() => import('./App'));

if (env.MODE === 'development' && env.VITE_APP_MSW_ENABLED) {
  import('./mocks/worker').then(worker => worker.default.start());
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense>
      <App />
    </Suspense>
  </StrictMode>,
);
