import { client } from "src/api/client.gen";
import { getAuthenticationToken } from "src/utils/authentication";

const API_URL = import.meta.env.VITE_API_URL as string;

client.setConfig({
  auth: () => getAuthenticationToken() ?? undefined,
  baseUrl: API_URL,
});
