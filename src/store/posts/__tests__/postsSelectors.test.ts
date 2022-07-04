import { RootState } from '../../index';
import { initialState } from '../postsSlice';
import { selectIsGetPostsLoading, selectPosts } from '../postsSelectors';

describe('postsSelectors', () => {
  const state = { posts: initialState } as RootState;
  it('selectPosts returns an array of posts', () => {
    expect(selectPosts(state)).toEqual([]);
  });
  it('selectIsGetPostsLoading returns false if not loading', () => {
    expect(selectIsGetPostsLoading(state)).toEqual(false);
  });
});
