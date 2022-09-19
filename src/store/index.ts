import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './noteSlice';

const store = configureStore({
  reducer: {
    comments: commentReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
