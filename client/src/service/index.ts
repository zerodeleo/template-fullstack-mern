import axios from 'axios';

export const API_URL: string = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : 'http://localhost:8080';

export const ping = async () => {
  return await axios.get(`${API_URL}/ping`);
};
