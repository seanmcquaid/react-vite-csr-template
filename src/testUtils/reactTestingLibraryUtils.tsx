import {
  render as rtlRender,
  RenderResult,
  renderHook as rtlRenderHook,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ReactElement, FC, ReactNode } from 'react';
import { RootState } from '../store';
import createTestStore from './createTestStore';
import createTestRouter from './createTestRouter';

interface RenderHookOptions {
  preloadedState?: RootState;
}

const renderHook = <T,>(fn: () => T, args?: RenderHookOptions) => {
  const store = createTestStore(args?.preloadedState);
  interface WrapperProps {
    children: ReactNode;
  }
  const Wrapper: FC<WrapperProps> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRenderHook(fn, { wrapper: Wrapper });
};

interface RenderOptions {
  preloadedState?: RootState;
  initialRoute?: string;
}

const render = (
  ui: ReactElement,
  { preloadedState, initialRoute = '/' }: RenderOptions = {},
): RenderResult => {
  window.history.pushState({}, 'test route', initialRoute);
  const store = createTestStore(preloadedState);
  const router = createTestRouter();

  const Wrapper: FC = () => (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render, renderHook };
