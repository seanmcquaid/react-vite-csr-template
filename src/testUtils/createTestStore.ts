import { configureStore } from '@reduxjs/toolkit';
import { RootState } from '../store';
import persistedReducer from '../store/reducers';

const createTestStore = (preloadedState?: RootState) => {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export default createTestStore;
