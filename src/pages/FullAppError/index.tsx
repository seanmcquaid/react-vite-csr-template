import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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
    <div>
      <h1>{t(TranslationConstants.Error.header)}</h1>
      <button onClick={handleOnClick}>
        {t(TranslationConstants.Error.button)}
      </button>
    </div>
  );
};

export default FullAppError;
