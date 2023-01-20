import { createSlice } from '@reduxjs/toolkit';
import { IPromiseState } from '../interfaces';
import { RootState } from '../store';
import { IUser, initialState as initialStateUser } from './userSlice';
import { FulfilledAction, PendingAction, RejectedAction } from '../types';

export interface IUsersState extends IPromiseState {
  users: IUser[];
}

export const initialState = {
  users: [{
    ...initialStateUser
  }]
};

export const idleUsers = (data: IUsersState) => ({
  users: data,
  status: 'idle',
  message: data.message ? data.message : initialState.users[0].message
});

export const loadingUsers = () => ({
  users: initialState.users,
  status: 'loading'
});

export const failedUsers = (message: any) => ({
  users: initialState.users,
  status: 'failed',
  message
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher<FulfilledAction>(
        (action) => action.type.endsWith('/users/fulfilled'),
        (_, action: any): any => idleUsers(action.payload.data.users)
      )
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith('/users/rejected'),
        (_, action: any) => failedUsers(action.payload)
      )
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/users/pending'),
        (_, __) => loadingUsers()
      );
  }
});

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
