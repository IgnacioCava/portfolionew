// src/lib/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000", // example default fallback
  // other settings: headers, withCredentials, etc.
});

console.log(import.meta.env.VITE_API_URL)

export default axiosInstance;