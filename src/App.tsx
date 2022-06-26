import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from './ErrorBoundary';
import theme from './theme';
import GlobalStyle from './theme/GlobalStyle';

const AppRouter = lazy(() => import('./routes/AppRouter'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <GlobalStyle />
          <AppRouter />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
