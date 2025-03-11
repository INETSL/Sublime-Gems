import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", // Backend API base URL
  timeout: 5000, // Request timeout in milliseconds
  withCredentials: true, // Allow sending cookies or authentication headers
});

export default axiosInstance;
