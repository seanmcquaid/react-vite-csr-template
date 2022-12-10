import { rest } from 'msw';
import createApiClient from '../createApiClient';
import { postSchema } from '../../types/responses/Post';
import mswServer from '../../testUtils/mswServer';

const baseURL = 'https://jsonplaceholder.typicode.com';

const mockConsoleLog = vi.fn();
const mockConsole = { log: mockConsoleLog };
vi.stubGlobal('console', mockConsole);

describe('createApiClient', () => {
  describe('Response interceptors', () => {
    describe('onFulfilled', () => {
      it('console logs if the API response does not match the validation schema', async () => {
        const apiClient = createApiClient(baseURL);
        await apiClient.get('/posts', {
          validationSchema: postSchema,
        });
        expect(mockConsoleLog).toHaveBeenCalled();
      });
    });
    describe('onRejected', () => {
      it('retries the original request if a 403 auth error occurs', async () => {
        const apiClient = createApiClient(baseURL);
        mswServer.use(
          rest.get(
            'https://jsonplaceholder.typicode.com/posts',
            (req, res, context) => {
              return res(context.status(403));
            },
          ),
        );
        try {
          await apiClient.get('/posts');
        } catch (e) {
          expect(e).toEqual({
            data: '',
            isRetry: true,
            statusCode: 403,
            statusText: 'Forbidden',
          });
        }
      });
      it('logs the error if the error is not a 403', async () => {
        const apiClient = createApiClient(baseURL);
        mswServer.use(
          rest.get(
            'https://jsonplaceholder.typicode.com/posts',
            (req, res, context) => {
              return res(context.status(500));
            },
          ),
        );
        try {
          await apiClient.get('/posts');
        } catch (e) {
          expect(mockConsoleLog).toHaveBeenCalled();
        }
      });
    });
  });
});
