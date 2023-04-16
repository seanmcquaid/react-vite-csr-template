import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { MockedFunction } from 'vitest';
import { render } from '../../../testUtils/reactTestingLibraryUtils';
import { ErrorBoundary } from '../index';

vi.mock('react-router-dom');

const mockUseRouteError = useRouteError as MockedFunction<typeof useRouteError>;

const mockIsRouteErrorResponse =
  isRouteErrorResponse as unknown as MockedFunction<
    typeof isRouteErrorResponse
  >;

describe('ErrorBoundary', () => {
  it('renders the default error message if it is not a route error', () => {
    mockUseRouteError.mockReturnValueOnce('Error');
    render(<ErrorBoundary />);
    expect(screen.getByTestId('default-error')).toBeInTheDocument();
  });
  it('renders the 404 message if it is a route error with status code 404', () => {
    mockIsRouteErrorResponse.mockReturnValueOnce(true);
    mockUseRouteError.mockReturnValueOnce({ status: 404 });
    render(<ErrorBoundary />);
    expect(screen.getByTestId('not-found-error')).toBeInTheDocument();
  });
  it('renders the generic router error message if it is a route error with status code other than 404', () => {
    mockIsRouteErrorResponse.mockReturnValueOnce(true);
    mockUseRouteError.mockReturnValueOnce('Error');
    render(<ErrorBoundary />);
    expect(screen.getByTestId('router-error')).toBeInTheDocument();
  });
});
