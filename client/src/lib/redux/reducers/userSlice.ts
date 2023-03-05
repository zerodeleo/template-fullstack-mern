import { createSlice } from '@reduxjs/toolkit';
import { actions } from '../actions';
import { IPromiseState } from '../interfaces';
import { FulfilledAction, PendingAction, RejectedAction } from '../types';

export interface IUser {
  username: string;
}

export interface IUserState extends IUser, IPromiseState {
  _id: string;
}

export const initialState = {
  _id: '',
  username: '',
  status: 'idle',
  message: ''
};

export const idleUser = (data: IUserState) => ({
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.createUser.fulfilled, (state, action) => {
        const user = idleUser(action.payload.data);
        console.log(user);
        localStorage.setItem('_id', user._id);
        return user;
      })
      .addMatcher<FulfilledAction>(
        (action) => action.type.endsWith('/user/fulfilled'),
        (_, action: any) => idleUser(action.payload.data)
      )
      .addMatcher<RejectedAction>(
        (action) => action.type.endsWith('/user/rejected'),
        (_, action: any) => failedUser(action.payload)
      )
      .addMatcher<PendingAction>(
        (action) => action.type.endsWith('/user/pending'),
        (_, __) => loadingUser()
      );
  }
});

export default userSlice.reducer;
