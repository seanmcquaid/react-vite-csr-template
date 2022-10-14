import { ChangeEvent, FC, useState, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import ClipLoader from 'react-spinners/ClipLoader';
import { Await, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import PageContainer from '../../components/PageContainer';
import TextInput from '../../components/TextInput';
import H1 from '../../components/Typography/H1';
import TranslationConstants from '../../i18n/TranslationConstants';
import PostsList from './PostsList';
import { PostsLoaderData } from './postsLoader';

const Posts: FC = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const { posts } = useLoaderData() as PostsLoaderData;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const handleOnClick = () => {
    setText('');
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <H1>{t(TranslationConstants.Posts.title)}</H1>
        <TextInput
          value={text}
          onChange={handleOnChange}
          id="text"
          name="example"
          label={t(TranslationConstants.Posts.textInputLabel)}
          placeholder={t(TranslationConstants.Posts.textInputPlaceholder)}
        />
        <Button onClick={handleOnClick}>
          {t(TranslationConstants.Posts.clear)}
        </Button>
      </HeaderContainer>
      <Suspense fallback={<ClipLoader loading />}>
        <Await resolve={posts} errorElement={'ERROR'}>
          <PostsList filterText={text} />
        </Await>
      </Suspense>
    </PageContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
`;

export default Posts;
