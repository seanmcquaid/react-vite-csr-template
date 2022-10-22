import { FC, useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import TranslationConstants from '../../i18n/TranslationConstants';

const NotFound: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [, startTransition] = useTransition();

  const handleOnClick = () => {
    startTransition(() => {
      navigate('/');
    });
  };

  return (
    <div>
      <h1>{t(TranslationConstants.NotFound.title)}</h1>
      <p>{t(TranslationConstants.NotFound.text)}</p>
      <button onClick={handleOnClick}>
        {t(TranslationConstants.NotFound.home)}
      </button>
    </div>
  );
};

export default NotFound;
