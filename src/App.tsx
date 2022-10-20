import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import ErrorBoundary from './ErrorBoundary';
import LoadingOverlay from './components/LoadingOverlay';

const AppRouter = lazy(() => import('./routes/AppRouter'));

const persistor = persistStore(store);

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Suspense fallback={<LoadingOverlay isLoading />}>
            <AppRouter />
          </Suspense>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
