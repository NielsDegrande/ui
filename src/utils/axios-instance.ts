import { Api } from "src/api/Api";
import { getAuthenticationToken } from "src/utils/authentication";

const API_URL = import.meta.env.VITE_API_URL as string;

export const api = new Api({
  baseURL: API_URL,
});

api.instance.interceptors.request.use((config) => {
  const token = getAuthenticationToken();
  if (token) {
    config.headers.Authorization = `Basic ${token}`;
  }
  return config;
});
