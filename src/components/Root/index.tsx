import { FC, Suspense } from 'react';
import { isRouteErrorResponse, Outlet, useRouteError } from 'react-router-dom';
import Navbar from './Navbar';

export const Component: FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export const ErrorBoundary: FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div data-testid="not-found-error">Not found error</div>;
    }

    return <div data-testid="router-error">Router error response</div>;
  }

  return (
    <div data-testid="default-error">
      Something went wrong that isn't a route error
    </div>
  );
};
