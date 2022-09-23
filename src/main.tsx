import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import 'reset-css';
import { NODE_ENV } from './AppConstants';

const App = React.lazy(() => import('./App'));

const renderApp = () =>
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <React.Suspense>
        <App />
      </React.Suspense>
    </React.StrictMode>,
  );

if (import.meta.env.NODE_ENV !== NODE_ENV.PRODUCTION) {
  import('@axe-core/react').then(axe => {
    axe.default(React, ReactDOM, 1000);
    renderApp();
  });
} else {
  renderApp();
}
