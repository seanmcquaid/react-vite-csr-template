import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const RouterErrorBoundary: FC = () => {
  const error = useRouteError();

  return <div />;
};

export default RouterErrorBoundary;
