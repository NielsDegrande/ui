import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { api } from "src/utils/axios-instance";
import { Path } from "src/utils/paths";

/**
 * The key used to store the authentication token in the local storage.
 */
const AUTHENTICATION_TOKEN = "auth_token";

/**
 * Retrieves the authentication token from the local storage.
 * @returns The authentication token, or null if it does not exist.
 */
export const getAuthenticationToken = (): string | null => {
  return localStorage.getItem(AUTHENTICATION_TOKEN);
};

/**
 * Sets the authentication token in the local storage.
 * @param token - The authentication token to be set.
 */
const setAuthenticationToken = (token: string): void => {
  localStorage.setItem(AUTHENTICATION_TOKEN, token);
};

/**
 * Removes the authentication token from the local storage.
 */
const removeAuthenticationToken = (): void => {
  localStorage.removeItem(AUTHENTICATION_TOKEN);
};

/**
 * Checks if the user is authenticated.
 * @returns Returns true if the user is authenticated, otherwise false.
 */
export const isAuthenticated = (): boolean => {
  const auth = localStorage.getItem(AUTHENTICATION_TOKEN);
  return auth !== null;
};

/**
 * Logs in the user with the provided username and password.
 * Sets the authentication token and handles authentication errors.
 *
 * @param username - The username of the user.
 * @param password - The password of the user.
 * @param navigate - A function to navigate to a specific path.
 */
export const logIn = (
  username: string,
  password: string,
  navigate: (path: string) => void
): void => {
  setAuthenticationToken(btoa(`${username}:${password}`));
  api
    .authenticateApiAuthGet()
    .then(() => {
      navigate(Path.HOME);
    })
    .catch((error: unknown) => {
      removeAuthenticationToken();

      const response = (error as AxiosError).response;

      if (response && response.status === 404) {
        toast.error("User not found.");
      } else if (response && response.status === 401) {
        toast.error("Invalid password.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    });
};

/**
 * Logs out the user and navigates to the authentication page.
 * @param navigate - A function used for navigation.
 */
export const logOut = (navigate: (path: string) => void) => {
  removeAuthenticationToken();
  navigate(Path.AUTH);
};
