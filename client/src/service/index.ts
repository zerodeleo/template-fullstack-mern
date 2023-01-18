import axios from 'axios';

export const ping = async () => {
  return await axios.get(`${import.meta.env.VITE_API_URL}ping`);
};
