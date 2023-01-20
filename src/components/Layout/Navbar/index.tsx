import { FC, useMemo } from 'react';
import RouteConstants from '../../../routes/RouteConstants';
import NavLinkList, { NavRoute } from './NavLinkList';

const Navbar: FC = () => {
  const navRoutes: NavRoute[] = useMemo(
    () => [
      {
        displayName: 'Home',
        route: RouteConstants.HOME,
      },
    ],
    [],
  );

  return (
    <nav>
      <NavLinkList navRoutes={navRoutes} />
    </nav>
  );
};
export default Navbar;
