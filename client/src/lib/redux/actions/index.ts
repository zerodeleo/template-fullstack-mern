import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../../service';
import { IUserState } from '../reducers/userSlice';
import { IAuthenticateUser } from '../reducers/authSlice';

interface IService {
  method: 'get' | 'post' | 'patch' | 'delete';
  url: string;
  body: object | undefined;
  thunkAPI: any;
}

const service = async (args: IService) => {
  try {
    return await axios[args.method](`${API_URL}${args.url}`, args.body);
  } catch (err: any) {
    console.error(err);
    return args.thunkAPI.rejectWithValue(err.response.data.message);
  }
};

/**
 * User Thunks
 */

export const authenticateUser = createAsyncThunk('users/authenticate', async (user: IAuthenticateUser, thunkAPI) => {
  return service({ method: 'post', url: `/users/authenticate`, body: { ...user }, thunkAPI });
});

export const createUser = createAsyncThunk('create/user', async (user: IAuthenticateUser, thunkAPI) => {
  return service({ method: 'post', url: `/users/`, body: { ...user }, thunkAPI });
});

export const readUser = createAsyncThunk('read/user', async (_id: string, thunkAPI) => {
  return service({ method: 'get', url: `/users/${_id}`, body: {}, thunkAPI });
});

export const updateUser = createAsyncThunk('update/user', async (user: IUserState, thunkAPI) => {
  return service({ method: 'patch', url: `/users/${user._id}`, body: { ...user }, thunkAPI });
});

export const deleteUser = createAsyncThunk('delete/user', async (_id: string, thunkAPI) => {
  return service({ method: 'delete', url: `/users/${_id}`, body: {}, thunkAPI });
});

/**
 * Users Thunks
 */

export const readAllUsers = createAsyncThunk('readAllUsers/users', async (_, thunkAPI) => {
  return service({ method: 'get', url: `/users/`, body: {}, thunkAPI });
});

export * as actions from './';
