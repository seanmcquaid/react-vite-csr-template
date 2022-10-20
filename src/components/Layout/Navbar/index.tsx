import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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
    <nav>
      <NavLinkList navRoutes={navRoutes} />
    </nav>
  );
};
export default Navbar;
