import React from "react";

import { Global } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ProtectedRoute from "src/components/protected-route/ProtectedRoute";
import { globalStyles } from "src/main.styled";
import Home from "src/pages/home/Home";
import Login from "src/pages/login/Login";
import NotFound from "src/pages/not-found/NotFound";
import Products from "src/pages/products/Products";
import { Path } from "src/utils/paths";
import { queryClient } from "src/utils/query-client";

import "react-toastify/dist/ReactToastify.css";
import "src/locales/i18n";

const { worker } = await import("src/mocks/browser");

// `worker.start()` returns a Promise that resolves
// once the Service Worker is up and ready to intercept requests.
if (import.meta.env.VITE_USE_MOCK_API !== "false") {
  // eslint-disable-next-line no-console
  console.log("Using mock API");
  void worker.start();
}

const router = createBrowserRouter([
  {
    path: Path.HOME,
    element: <ProtectedRoute />,
    children: [
      {
        path: Path.HOME,
        element: <Home />,
      },
      {
        path: Path.PRODUCTS,
        element: <Products />,
      },
    ],
  },
  {
    path: Path.AUTH,
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <ToastContainer position="top-center" />
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
