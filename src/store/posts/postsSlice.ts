import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '..';
import AppConstants from '../../AppConstants';
import services from '../../services';
import ApiStatus from '../../types/ApiStatus';
import Post from '../../types/Post';
import ReducerNames from '../ReducerNames';

enum PostAsyncThunkNames {
  GET_POSTS = 'getPosts',
}

export const getPosts = createAsyncThunk<
  Post[],
  void,
  { dispatch: AppDispatch; state: RootState }
>(
  `${ReducerNames.POSTS}/${PostAsyncThunkNames.GET_POSTS}`,
  async (_, { rejectWithValue }) => {
    try {
      return services.postsService.getPosts();
    } catch (e) {
      console.log('log this to error logging service', e);
      return rejectWithValue(e);
    }
  },
);

interface PostsApiStatus {
  getPosts: ApiStatus;
}

export interface PostsState {
  posts: Post[];
  apiStatus: PostsApiStatus;
}

export const initialState: PostsState = {
  posts: [],
  apiStatus: {
    getPosts: {
      state: AppConstants.API_STATE.IDLE,
      error: null,
    },
  },
};

const postsSlice = createSlice({
  name: ReducerNames.POSTS,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPosts.pending, state => {
      state.apiStatus.getPosts.state = AppConstants.API_STATE.LOADING;
      state.apiStatus.getPosts.error = null;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.apiStatus.getPosts = { ...initialState.apiStatus.getPosts };
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.apiStatus.getPosts.state = AppConstants.API_STATE.ERROR;
      state.apiStatus.getPosts.error = action.error;
    });
  },
});

export default postsSlice.reducer;
