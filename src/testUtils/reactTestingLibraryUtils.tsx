import {
  render as rtlRender,
  RenderResult,
  renderHook as rtlRenderHook,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { ReactElement, FC, ReactNode } from 'react';
import { RootState } from '../store';
import createTestStore from './createTestStore';
import DataMemoryRouter from './DataMemoryRouter';

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
  { preloadedState, initialRoute }: RenderOptions = {},
): RenderResult => {
  const store = createTestStore(preloadedState);

  interface WrapperProps {
    children: ReactNode;
  }

  const Wrapper: FC<WrapperProps> = ({ children }) => (
    <Provider store={store}>
      {initialRoute ? (
        <DataMemoryRouter initialEntries={[initialRoute]}>
          <>{children}</>
        </DataMemoryRouter>
      ) : (
        children
      )}
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render, renderHook };
