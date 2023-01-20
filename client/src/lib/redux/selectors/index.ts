import { RootState } from '../store';

export const selectUser = (state: RootState) => state.user;
export const selectUsers = (state: RootState) => state.users.users;
