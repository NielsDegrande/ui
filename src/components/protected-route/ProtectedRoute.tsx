import { ErrorBoundary } from "react-error-boundary";
import { Navigate, Outlet } from "react-router-dom";

import Error from "src/pages/error/Error";
import { isAuthenticated } from "src/utils/authentication";

/**
 * A component that renders the protected route.
 * If the user is authenticated, it renders the children components wrapped in an ErrorBoundary.
 * If the user is not authenticated, it navigates to the authentication page.
 *
 * @returns The rendered protected route component.
 */
const ProtectedRoute: React.FC = () => {
  return isAuthenticated() ? (
    <ErrorBoundary fallback={<Error />}>
      <Outlet />
    </ErrorBoundary>
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default ProtectedRoute;
