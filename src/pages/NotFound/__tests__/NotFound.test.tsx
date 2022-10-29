import { Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitFor,
} from '../../../testUtils/reactTestingLibraryUtils';
import NotFound from '../NotFound';
import TranslationConstants from '../../../i18n/TranslationConstants';

describe('NotFound', () => {
  it('Navigates the user back to home when the button is clicked', async () => {
    render(
      <>
        <Route element={<div data-testid="home" />} path="/" />
        <Route element={<NotFound />} path="*" />
      </>,
      { initialRoute: '/notFound' },
    );
    await userEvent.click(screen.getByText(TranslationConstants.NotFound.home));
    await waitFor(() =>
      expect(screen.queryByTestId('home')).toBeInTheDocument(),
    );
  });
});
