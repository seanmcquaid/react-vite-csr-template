import { Route } from 'react-router-dom';
import { waitFor } from '@testing-library/react';
import { render, screen } from '../testUtils/reactTestingLibraryUtils';
import RootErrorBoundary from '../RootErrorBoundary';

describe('RootErrorBoundary', () => {
  describe('isRouteErrorResponse', () => {
    it('Displays not found error if the status code is 404', async () => {
      render(
        <Route
          path="/"
          errorElement={<RootErrorBoundary />}
          element={<></>}
          loader={() => {
            throw new Response('Not found', { status: 404 });
          }}
        />,
        { initialRoute: '/' },
      );
      await waitFor(() =>
        expect(screen.queryByTestId('not-found-error')).toBeInTheDocument(),
      );
    });
    it('Displays a generic router error', async () => {
      render(
        <Route
          path="/"
          errorElement={<RootErrorBoundary />}
          element={<></>}
          loader={() => {
            throw new Response('Server error', { status: 500 });
          }}
        />,
        { initialRoute: '/' },
      );
      await waitFor(() =>
        expect(screen.queryByTestId('router-error')).toBeInTheDocument(),
      );
    });
  });
  it('Displays the default error if the error is not a route error', async () => {
    render(
      <Route
        path="/"
        errorElement={<RootErrorBoundary />}
        element={<></>}
        loader={() => {
          throw new Error('Error');
        }}
      />,
      { initialRoute: '/' },
    );
    await waitFor(() =>
      expect(screen.queryByTestId('default-error')).toBeInTheDocument(),
    );
  });
});
