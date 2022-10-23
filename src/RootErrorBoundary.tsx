import { FC } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const RouterErrorBoundary: FC = () => {
  const error = useRouteError();

  console.log(isRouteErrorResponse(error));

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      // eslint-disable-next-line i18next/no-literal-string
      return <div data-testid="not-found-error">Not found error</div>;
    }

    // eslint-disable-next-line i18next/no-literal-string
    return <div data-testid="router-error">Router error response</div>;
  }

  // eslint-disable-next-line i18next/no-literal-string
  return <div data-testid="default-error">Something went wrong</div>;
};

export default RouterErrorBoundary;
