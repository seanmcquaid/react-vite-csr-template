import { lazy, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import LoadingOverlay from './components/LoadingOverlay';
import './index.css';

const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<LoadingOverlay isLoading />}>
      <App />
    </Suspense>
  </StrictMode>,
);
