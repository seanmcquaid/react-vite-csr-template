import { ChangeEvent, FC, useState, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import ClipLoader from 'react-spinners/ClipLoader';
import { Await, useLoaderData } from 'react-router-dom';
import { PersistProvider } from 'context-persist';
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
    <PersistProvider
      defaultValue={'value'}
      persistKey={'key'}
      persistVersion={0}
    >
      <div>
        <h1>{t(TranslationConstants.Posts.title)}</h1>
        <input
          value={text}
          onChange={handleOnChange}
          id="text"
          name="example"
          placeholder={t(TranslationConstants.Posts.textInputPlaceholder)}
          data-testid="text-input"
        />
        <button onClick={handleOnClick} data-testid="clear-button">
          {t(TranslationConstants.Posts.clear)}
        </button>
      </div>
      <Suspense fallback={<ClipLoader loading />}>
        <Await resolve={posts} errorElement={'ERROR'}>
          <PostsList filterText={text} />
        </Await>
      </Suspense>
    </PersistProvider>
  );
};

export default Posts;
