import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API || "http://localhost:3000/api/v1/",
});

export { AxiosInstance };
