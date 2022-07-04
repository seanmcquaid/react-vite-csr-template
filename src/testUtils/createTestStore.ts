import { configureStore } from '@reduxjs/toolkit';
import { RootState } from '../store';
import postsApi from '../store/postsApi';
import persistedReducer from '../store/reducers';

const createTestStore = (preloadedState?: RootState) => {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(postsApi.middleware),
  });
};

export default createTestStore;
