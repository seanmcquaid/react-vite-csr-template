import { FC } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const RouterErrorBoundary: FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // eslint-disable-next-line i18next/no-literal-string
    return <div>Router error response</div>;
  }

  // eslint-disable-next-line i18next/no-literal-string
  return <div>Something went wrong</div>;
};

export default RouterErrorBoundary;
