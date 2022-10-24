import postsReducer, { initialState, getPosts } from '../postsSlice';
import AppConstants from '../../../AppConstants';
import Post from '../../../types/Post';

describe('postsSlice', () => {
  describe('getPosts', () => {
    it('should handle pending properly', () => {
      expect(
        postsReducer(initialState, { type: getPosts.pending.type }).apiStatus
          .getPosts.state,
      ).toEqual(AppConstants.API_STATE.LOADING);
    });
    it('should handle fulfilled properly', () => {
      expect(
        postsReducer(initialState, {
          type: getPosts.fulfilled.type,
          payload: [{ id: 1, body: 'example', title: '', userId: 1 }] as Post[],
        }).posts,
      ).toEqual([{ id: 1, body: 'example', title: '', userId: 1 }] as Post[]);
    });
    it('should handle rejected properly', () => {
      expect(
        postsReducer(initialState, { type: getPosts.rejected.type }).apiStatus
          .getPosts.state,
      ).toEqual(AppConstants.API_STATE.ERROR);
    });
  });
});
