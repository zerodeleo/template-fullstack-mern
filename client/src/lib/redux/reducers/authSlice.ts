import { createSlice } from '@reduxjs/toolkit';
import { authenticateUser } from '../actions';
import { IPromiseState } from '../interfaces';
import { FulfilledAction, PendingAction, RejectedAction } from '../types';
import { initialState as userInitialState } from './userSlice';
import { IUser } from './userSlice';

export interface IAuthenticateUser extends IUser {
  password: string;
}

export interface IAuthenticateUserState extends IAuthenticateUser, IPromiseState {
  _id: string;
}

export const initialState: IAuthenticateUserState = {
  ...userInitialState,
  password: ''
};

export const idleUser = (data: IAuthenticateUserState) => ({
  ...data,
  status: 'idle',
  message: data.message ? data.message : initialState.message
});

export const loadingUser = () => ({
  ...initialState,
  status: 'loading'
});

export const failedUser = (message: any) => ({
  ...initialState,
  status: 'failed',
  message
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addMatcher<FulfilledAction>(
        (action) => action.type.endsWith('/authenticate/fulfilled'),
        (_, action: any) => {
          const user = idleUser(action.payload.data);
          localStorage.setItem('_id', user._id);
          return user;
        }
      )
      .addMatcher<RejectedAction>(
        (action) => {
          return action.type.endsWith('/authenticate/rejected');
        },
        (_, action: any) => {
          return failedUser(action.payload);
        }
      )
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/authenticate/pending'),
        (_, __) => loadingUser()
      );
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
