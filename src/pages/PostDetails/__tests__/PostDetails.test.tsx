import { rest } from 'msw';
import { screen, waitFor } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { render } from '../../../testUtils/reactTestingLibraryUtils';
import PostDetails from '../PostDetails';
import mswServer from '../../../testUtils/mswServer';
import RouteConstants from '../../../routes/RouteConstants';
import postDetailsLoader from '../postDetailsLoader';

describe('PostDetails', () => {
  it('does not display post info if no data comes back from the API', async () => {
    mswServer.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/posts/1',
        (req, res, context) => {
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
});
