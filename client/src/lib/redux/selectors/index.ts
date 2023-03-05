import { RootState } from '../store';

export const selectUser = (state: RootState) => state.user;
export const selectAuth = (state: RootState) => state.auth;
export const selectUsers = (state: RootState) => state.users.users;
