import '@testing-library/jest-dom';
import 'isomorphic-fetch';
import { vi } from 'vitest';
import matchers, {
  TestingLibraryMatchers,
} from '@testing-library/jest-dom/matchers';
import mswServer from './testUtils/mswServer';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

beforeEach(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

declare global {
  namespace Vi {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}

expect.extend(matchers);
