import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import store from './store';
import theme from './theme';
import GlobalStyle from './theme/GlobalStyle';
import ErrorBoundary from './ErrorBoundary';
import AppRouter from './routes/AppRouter';

const persistor = persistStore(store);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <GlobalStyle />
            <AppRouter />
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
