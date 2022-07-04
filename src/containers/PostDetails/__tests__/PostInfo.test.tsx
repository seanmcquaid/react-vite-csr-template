import { describe, it } from 'vitest';
import { rest } from 'msw';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../../testUtils/reactTestingLibraryUtils';
import PostDetails from '../index';
import mswServer from '../../../testUtils/mswServer';

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
    render(<PostDetails />);
    await waitFor(() =>
      expect(screen.queryByTestId('post-info')).not.toBeInTheDocument(),
    );
  });
  it('displays post info if it comes back from the API', async () => {
    render(<PostDetails />);
    await waitFor(() =>
      expect(screen.queryByTestId('post-info')).toBeInTheDocument(),
    );
  });
});
