import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export interface NavRoute {
  route: string;
  displayName: string;
}

interface NavLinkListProps {
  navRoutes: NavRoute[];
}

const NavLinkList: FC<NavLinkListProps> = ({ navRoutes }) => (
  <List>
    {navRoutes.map(({ route, displayName }, i) => (
      <ListItem key={i}>
        <StyledNavLink to={route}>{displayName}</StyledNavLink>
      </ListItem>
    ))}
  </List>
);

const List = styled.ul``;

const ListItem = styled.li``;

const StyledNavLink = styled(NavLink)``;

export default NavLinkList;
