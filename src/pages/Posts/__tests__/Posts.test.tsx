import { Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitFor,
  act,
} from '../../../testUtils/reactTestingLibraryUtils';
import RouteConstants from '../../../routes/RouteConstants';
import postsLoader from '../postsLoader';
import Posts from '../Posts';

describe('Posts', () => {
  beforeEach(() => {
    render(
      <Route
        path={RouteConstants.HOME}
        element={<Posts />}
        loader={postsLoader}
      />,
      { initialRoute: RouteConstants.HOME },
    );
  });
  it('Updates search text if user types', async () => {
    await waitFor(() =>
      expect(screen.queryByTestId('text-input')).toBeInTheDocument(),
    );
    await act(async () => {
      await userEvent.type(screen.getByTestId('text-input'), 'test value');
    });
    expect(screen.getByTestId('text-input')).toHaveValue('test value');
  });
  it('Clears search text if user clicks button', async () => {
    await waitFor(() =>
      expect(screen.queryByTestId('text-input')).toBeInTheDocument(),
    );
    await act(async () => {
      await userEvent.type(screen.getByTestId('text-input'), 'test value');
    });
    expect(screen.getByTestId('text-input')).toHaveValue('test value');
    await act(async () => {
      await userEvent.click(screen.getByTestId('clear-button'));
    });
    expect(screen.getByTestId('text-input')).toHaveValue('');
  });
});
