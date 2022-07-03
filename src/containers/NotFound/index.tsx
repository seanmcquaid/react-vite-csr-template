import { FC, useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import H1 from '../../components/Typography/H1';
import P from '../../components/Typography/P';
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
    <PageContainer>
      <H1>{t(TranslationConstants.NotFound.title)}</H1>
      <P>{t(TranslationConstants.NotFound.text)}</P>
      <button onClick={handleOnClick}>
        {t(TranslationConstants.NotFound.home)}
      </button>
    </PageContainer>
  );
};

export default NotFound;
