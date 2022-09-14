import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';
import getIsApiLoading from '../getIsApiLoading';

const selectPostsApiReducerState = (state: RootState) => state.postsApi;

export const selectIsPostsApiLoading = createSelector(
  selectPostsApiReducerState,
  postsApiReducerState => getIsApiLoading(postsApiReducerState.queries),
);
