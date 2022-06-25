import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './ErrorBoundary';
import theme from './theme';
import GlobalStyle from './theme/GlobalStyle';

const AppRouter = lazy(() => import('./routes/AppRouter'));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Suspense>
          <GlobalStyle />
          <AppRouter />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
