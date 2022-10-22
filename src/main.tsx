import { lazy, StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import './index.css';
import LoadingOverlay from './components/LoadingOverlay';

const AppRouter = lazy(
  () => import(/* webpackChunkName: "AppRouter" */ './routes/AppRouter'),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<LoadingOverlay isLoading />}>
      <AppRouter />
    </Suspense>
  </StrictMode>,
);
