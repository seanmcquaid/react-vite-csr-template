import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import RouteConstants from './RouteConstants';

const AppRoutes: FC = () => (
  <Routes>
    <Route path={RouteConstants.HOME} element={<div />} />
  </Routes>
);

export default AppRoutes;
