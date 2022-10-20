import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavRoute {
  route: string;
  displayName: string;
}

interface NavLinkListProps {
  navRoutes: NavRoute[];
}

const NavLinkList: FC<NavLinkListProps> = ({ navRoutes }) => (
  <ul>
    {navRoutes.map(({ route, displayName }, i) => (
      <li key={i}>
        <NavLink to={route}>{displayName}</NavLink>
      </li>
    ))}
  </ul>
);

export default NavLinkList;
