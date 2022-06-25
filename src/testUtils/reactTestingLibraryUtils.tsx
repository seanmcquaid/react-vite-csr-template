import {
  render as rtlRender,
  RenderResult,
  renderHook as rtlRenderHook,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes } from 'react-router-dom';
import { ReactElement, FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { RootState } from '../store';
import theme from '../theme';
import createTestStore from './createTestStore';

interface RenderHookOptions {
  preloadedState?: RootState;
}

const renderHook = <T,>(fn: () => T, args?: RenderHookOptions) => {
  const store = createTestStore(args?.preloadedState);
  interface WrapperProps {
    children: ReactNode;
  }
  const Wrapper: FC<WrapperProps> = ({ children }) => (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
  return rtlRenderHook(fn, { wrapper: Wrapper });
};

interface RenderOptions {
  preloadedState?: RootState;
  initialRoute?: string;
}

const render = (
  ui: ReactElement,
  { preloadedState, initialRoute }: RenderOptions = {},
): RenderResult => {
  const store = createTestStore(preloadedState);
  interface WrapperProps {
    children: ReactNode;
  }
  const Wrapper: FC<WrapperProps> = ({ children }) => (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {initialRoute ? (
          <MemoryRouter initialEntries={[initialRoute]}>
            <Routes>{children}</Routes>
          </MemoryRouter>
        ) : (
          children
        )}
      </Provider>
    </ThemeProvider>
  );

  return rtlRender(ui, { wrapper: Wrapper });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render, renderHook };
