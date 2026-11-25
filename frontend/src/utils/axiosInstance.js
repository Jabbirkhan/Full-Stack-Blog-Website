// src/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

axiosInstance.interceptors.response.use(
    res => res,
    err => {
        // if (err.response?.status === 401) {
        //     window.location.href = "/login";
        // }
        return Promise.reject(err);
    }
)

export default axiosInstance;