import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import H1 from '../../components/Typography/H1';
import TranslationConstants from '../../i18n/TranslationConstants';
import RouteConstants from '../../routes/RouteConstants';

const FullAppError: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOnClick = (): void => {
    navigate(0);
  };

  return (
    <PageContainer>
      <H1>{t(TranslationConstants.Error.header)}</H1>
      <Link to={RouteConstants.HOME}>{t(TranslationConstants.Error.home)}</Link>
      <button onClick={handleOnClick}>
        {t(TranslationConstants.Error.button)}
      </button>
    </PageContainer>
  );
};

export default FullAppError;
