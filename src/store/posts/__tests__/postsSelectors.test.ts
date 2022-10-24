import { RootState } from '../../index';
import { initialState } from '../postsSlice';
import {
  selectIsGetPostsLoading,
  selectPostById,
  selectPosts,
} from '../postsSelectors';

describe('postsSelectors', () => {
  const state = {
    posts: {
      ...initialState,
      posts: [{ title: 'title', body: 'body', id: 1, userId: 1 }],
    },
  } as RootState;
  it('selectPosts returns an array of posts', () => {
    expect(selectPosts(state)).toEqual([
      { title: 'title', body: 'body', id: 1, userId: 1 },
    ]);
  });
  it('selectIsGetPostsLoading returns false if not loading', () => {
    expect(selectIsGetPostsLoading(state)).toEqual(false);
  });
  it('selectPostById returns a post if found', () => {
    expect(selectPostById(state, 1)).toEqual({
      title: 'title',
      body: 'body',
      id: 1,
      userId: 1,
    });
  });
});
