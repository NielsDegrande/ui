import { CenterMiddleContainer } from "src/components/center-middle-container/CenterMiddleContainer";
import Sidebar from "src/components/sidebar/Sidebar";
import Welcome from "src/components/welcome/Welcome";

/**
 * Renders the Home page.
 */
const Home = () => {
  return (
    <>
      <Sidebar />;
      <CenterMiddleContainer>
        <Welcome />
      </CenterMiddleContainer>
    </>
  );
};

export default Home;
