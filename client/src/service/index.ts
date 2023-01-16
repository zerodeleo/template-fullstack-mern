import axios from "axios";

export const get = async() => {
    return await axios.get(import.meta.env.VITE_API_URL);
}
