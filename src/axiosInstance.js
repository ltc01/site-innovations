// src/axiosInstance.js
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const axiosInstance = axios.create({
  baseURL: apiUrl,
});

// Request interceptor: Add Authorization header before sending the request
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `JWT ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: Refresh the token when expired
axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful responses
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized error and refresh token
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken) {
        try {
          const response = await axios.post("/api/auth/jwt/refresh", {
            refresh: refreshToken,
          });

          const newAccessToken = response.data.access;
          localStorage.setItem("access_token", newAccessToken);
          localStorage.setItem("refresh_token", response.data.refresh);
          originalRequest.headers["Authorization"] = `JWT ${newAccessToken}`;

          return axiosInstance(originalRequest);
        } catch (err) {
          console.error("Token refresh failed", err);
          // Handle token refresh failure (e.g., logout the user)
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
