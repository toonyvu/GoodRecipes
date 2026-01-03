import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // backend URL
  withCredentials: true, // useful later for cookies/JWT
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
