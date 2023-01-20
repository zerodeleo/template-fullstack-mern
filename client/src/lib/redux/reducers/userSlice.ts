import { AsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPromiseState } from '../interfaces';
import { RootState } from '../store';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export interface IUser {
  username: string;
}

export interface IUserState extends IUser, IPromiseState {
  _id: string;
}

export interface IAuthenticateUser extends IUser {
  password: string;
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
