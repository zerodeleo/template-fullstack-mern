import { AsyncThunkAction } from '@reduxjs/toolkit';
import React, { createContext, useReducer, useCallback, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { authenticateUser, createUser, readUser } from '../redux/actions';
import { useAppDispatch } from '../redux/hooks';

import authReducer, { IAuthenticateUser, IAuthenticateUserState, reset } from '../redux/reducers/authSlice';
import { initialState } from '../redux/reducers/authSlice';
import { selectAuth, selectUser } from '../redux/selectors';

type AppContextProviderProps = {
  children: React.ReactNode;
};

const func = () => {};

export type AppThunk = (dispatch: React.Dispatch<string>) => Promise<void>;

export type ICredentials = {
  username: string;
  password: string;
};

interface IAuthContext {
  signIn: (credentials: ICredentials) => void;
  signUp: (credentials: ICredentials) => void;
  getUser: (_id: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContext>({ signIn: func, signUp: func, getUser: func, signOut: func });

const AuthContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const signIn = (credentials: ICredentials) => {
    dispatch(authenticateUser(credentials));
  };

  const signUp = (credentials: ICredentials) => {
    dispatch(createUser(credentials));
  };

  const getUser = (_id: string) => {
    dispatch(readUser(_id));
  };

  const signOut = () => {
    localStorage.setItem('_id', '');
    reset();
    location.reload();
  };

  return <AuthContext.Provider value={{ signIn, signUp, getUser, signOut }}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthContextProvider;
