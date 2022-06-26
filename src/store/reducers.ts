import storage from 'redux-persist/lib/storage';
import { createMigrate, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import AppConstants from '../AppConstants';
import ReducerNames from './ReducerNames';
import postsReducer, {
  initialState as postsInitialState,
} from './posts/postsSlice';
import postsApi from './postsApi';

const persistConfig = {
  key: 'root',
  version: AppConstants.REDUX_STORE_VERSION,
  storage,
  blacklist: [ReducerNames.POSTS_API, ReducerNames.POSTS],
};

const postsPersistConfig = {
  key: ReducerNames.POSTS,
  storage,
  blacklist: ['apiStatus'],
  version: AppConstants.REDUX_STORE_VERSION,
  migrate: createMigrate(
    {
      [AppConstants.REDUX_STORE_VERSION]: () => {
        return {
          ...postsInitialState,
          _persist: {
            rehydrated: false,
            version: AppConstants.REDUX_STORE_VERSION,
          },
        };
      },
    },
    { debug: false },
  ),
};

const persistedReducers = {
  [ReducerNames.POSTS]: persistReducer(postsPersistConfig, postsReducer),
};

const unpersistedReducers = {
  [ReducerNames.POSTS_API]: postsApi.reducer,
};

const rootReducer = combineReducers({
  ...persistedReducers,
  ...unpersistedReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
