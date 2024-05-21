import { QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => toast.error(`Something went wrong: ${error.message}.`),
  }),
});
