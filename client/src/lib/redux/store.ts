import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import usersReducer from './reducers/usersSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
