import { configureStore } from '@reduxjs/toolkit';
import { RootState } from '../store';

const createTestStore = (preloadedState?: RootState) => {
  return configureStore({
    reducer: {},
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export default createTestStore;
