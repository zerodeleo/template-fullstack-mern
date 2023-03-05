import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import usersReducer from './reducers/usersSlice';
import authReducer from './reducers/authSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
