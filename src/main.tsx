import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import 'reset-css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
