import axios from 'axios';

export const API_URL: string = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : 'http://localhost:8080';
export const CLIENT_URL: string = import.meta.env.VITE_CLIENT_URL ? import.meta.env.VITE_CLIENT_URL : '';

export const ping = async () => {
  return await axios.get(`${API_URL}/ping`);
};

// export const readAllUsers = async () => {
//   return await axios.get(`${API_URL}/users/`);
// };

// export const readUser = async (username: string) => {
//   return await axios.get(`${API_URL}/users/${username}`);
// };
