import { FC, ReactNode } from 'react';
import { RouterInit } from '@remix-run/router';
import {
  createMemoryRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

interface DataMemoryRouterProps {
  children: ReactNode;
  hydrationData?: RouterInit['hydrationData'];
  initialEntries?: string[];
}

const DataMemoryRouter: FC<DataMemoryRouterProps> = ({
  children,
  hydrationData,
  initialEntries,
}) => {
  const router = createMemoryRouter(createRoutesFromElements(children), {
    hydrationData,
    initialEntries,
  });
  return <RouterProvider router={router} />;
};

export default DataMemoryRouter;
