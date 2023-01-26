import { FC } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const RouterErrorBoundary: FC = () => {
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

export default RouterErrorBoundary;
