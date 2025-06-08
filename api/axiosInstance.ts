// lib/axios.ts
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // sends the cookie with requests
});

// Attach access token from client-side cookies (non-HttpOnly)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken"); // accessible only if NOT HttpOnly

    console.log("Getting the token from the cookies", token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
