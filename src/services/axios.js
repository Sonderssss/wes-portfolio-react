import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // if using cookies
  timeout: 10000, // optional timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
