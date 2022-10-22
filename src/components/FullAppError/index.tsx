import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import TranslationConstants from '../../i18n/TranslationConstants';

interface FullAppErrorProps {
  clearError: () => void;
}

const FullAppError: FC<FullAppErrorProps> = ({ clearError }) => {
  const { t } = useTranslation();

  const handleOnClick = (): void => {
    clearError();
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
