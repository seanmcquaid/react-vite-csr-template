import { rest } from 'msw';
import { screen, waitFor } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { render } from '../../../testUtils/reactTestingLibraryUtils';
import { Component as PostDetails } from '../PostDetails';
import server from '../../../../mocks/server';
import RouteConstants from '../../../routes/RouteConstants';
import postDetailsLoader from '../postDetailsLoader.ts';

describe('PostDetails', () => {
  it('displays post info if it comes back from the API', async () => {
    render(
      <Route
        path={RouteConstants.POST_DETAILS}
        element={<PostDetails />}
        loader={postDetailsLoader}
      />,
      { initialRoute: '/post/1' },
    );
    await waitFor(() =>
      expect(screen.queryByTestId('post-info')).toBeInTheDocument(),
    );
  });
  it('does not display post info if no data comes back from the API', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/posts/1',
        (_, res, context) => {
          return res(context.status(500));
        },
      ),
    );
    render(
      <Route
        path={RouteConstants.POST_DETAILS}
        element={<PostDetails />}
        loader={postDetailsLoader}
      />,
      { initialRoute: '/post/1' },
    );
    await waitFor(() =>
      expect(screen.queryByTestId('post-info')).not.toBeInTheDocument(),
    );
  });
});
