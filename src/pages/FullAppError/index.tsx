import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import H1 from '../../components/Typography/H1';
import TranslationConstants from '../../i18n/TranslationConstants';
import RouteConstants from '../../routes/RouteConstants';

interface FullAppErrorProps {
  clearError?: () => void;
}

const FullAppError: FC<FullAppErrorProps> = ({ clearError }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOnClick = (): void => {
    if (clearError) {
      clearError();
    } else {
      navigate(RouteConstants.HOME);
    }
  };

  return (
    <PageContainer>
      <H1>{t(TranslationConstants.Error.header)}</H1>
      <button onClick={handleOnClick}>
        {t(TranslationConstants.Error.button)}
      </button>
    </PageContainer>
  );
};

export default FullAppError;
