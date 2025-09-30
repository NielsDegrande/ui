import { ErrorBoundary } from "react-error-boundary";

import { CenterMiddleContainer } from "src/components/center-middle-container/CenterMiddleContainer";
import Sidebar from "src/components/sidebar/Sidebar";
import Welcome from "src/components/welcome/Welcome";
import Error from "src/pages/error/Error";

/**
 * Renders the Home page.
 */
const Home: React.FC = () => {
  return (
    <ErrorBoundary fallback={<Error />}>
      <div className="flex">
        <Sidebar />
        <CenterMiddleContainer>
          <Welcome />
        </CenterMiddleContainer>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
