import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import TranslationConstants from '../../../i18n/TranslationConstants';
import RouteConstants from '../../../routes/RouteConstants';
import NavLinkList, { NavRoute } from './NavLinkList';

const Navbar: FC = () => {
  const { t } = useTranslation();
  const navRoutes: NavRoute[] = useMemo(
    () => [
      {
        displayName: t(TranslationConstants.Navbar.home),
        route: RouteConstants.HOME,
      },
    ],
    [t],
  );

  return (
    <Nav>
      <NavLinkList navRoutes={navRoutes} />
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 72px;
  width: 100%;
`;

export default Navbar;
