import '@testing-library/jest-dom';
import 'isomorphic-fetch';
import matchers from '@testing-library/jest-dom/matchers';
import server from './mocks/server';

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

expect.extend(matchers);
