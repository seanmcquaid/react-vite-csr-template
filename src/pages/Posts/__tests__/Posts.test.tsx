import { Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitFor,
} from '../../../testUtils/reactTestingLibraryUtils';
import RouteConstants from '../../../routes/RouteConstants';
import {
  Component as Posts,
  loader as postsLoader,
  action as postsAction,
} from '../Posts';

describe('Posts', () => {
  beforeEach(() => {
    render(
      <Route
        path={RouteConstants.HOME}
        element={<Posts />}
        loader={postsLoader}
        action={postsAction}
      />,
      { initialRoute: RouteConstants.HOME },
    );
  });
  it('Updates search text if user types', async () => {
    await waitFor(() =>
      expect(screen.queryAllByTestId('post').length).toEqual(1),
    );
    await waitFor(() =>
      expect(screen.queryByTestId('text-input')).toBeInTheDocument(),
    );
    await userEvent.type(screen.getByTestId('text-input'), 'test value');
    expect(screen.getByTestId('text-input')).toHaveValue('test value');
  });
  it.skip('Clears search text if user clicks button', async () => {
    // skipping until we have a solid way to test a component using useFetcher
    await waitFor(() =>
      expect(screen.queryAllByTestId('post').length).toEqual(1),
    );
    await waitFor(() =>
      expect(screen.queryByTestId('text-input')).toBeInTheDocument(),
    );
    await userEvent.type(screen.getByTestId('text-input'), 'test value');
    expect(screen.getByTestId('text-input')).toHaveValue('test value');
    await userEvent.click(screen.getByTestId('search-button'));
    await waitFor(() =>
      expect(screen.getByTestId('text-input')).toHaveValue(''),
    );
  });
});
