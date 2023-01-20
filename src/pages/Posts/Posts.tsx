import { ChangeEvent, FC, useState, Suspense } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Await, useLoaderData } from 'react-router-dom';
import PostsList from './PostsList';
import { PostsLoaderData } from './postsLoader';

const Posts: FC = () => {
  const [text, setText] = useState('');
  const { posts } = useLoaderData() as PostsLoaderData;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const handleOnClick = () => {
    setText('');
  };

  return (
    <div>
      <div>
        <h1>Posts</h1>
        <input
          value={text}
          onChange={handleOnChange}
          id="text"
          name="example"
          data-testid="text-input"
        />
        <button onClick={handleOnClick} data-testid="clear-button">
          Clear
        </button>
      </div>
      <Suspense fallback={<ClipLoader loading />}>
        <Await resolve={posts} errorElement={'ERROR'}>
          <PostsList filterText={text} />
        </Await>
      </Suspense>
    </div>
  );
};

export default Posts;
