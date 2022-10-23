import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';
import AppConstants from '../../AppConstants';
import createDeepEqualSelector from '../../utils/createDeepEqualSelector';

const selectPostsReducerState = (state: RootState) => state.posts;

export const selectPosts = createDeepEqualSelector(
  selectPostsReducerState,
  postsReducerState => postsReducerState.posts,
);

export const selectIsGetPostsLoading = createSelector(
  selectPostsReducerState,
  postsReducerState =>
    postsReducerState.apiStatus.getPosts.state ===
    AppConstants.API_STATE.LOADING,
);

export const selectPostById = createSelector(
  [selectPosts, (_, id: number) => id],
  (posts, id) => posts.find(post => post.id === id),
);
