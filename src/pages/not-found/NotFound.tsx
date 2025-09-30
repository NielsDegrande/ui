import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { CenterMiddleContainer } from "src/components/center-middle-container/CenterMiddleContainer";
import { Button } from "src/components/ui/button";
import Error from "src/pages/error/Error";
import { Path } from "src/utils/paths";

/**
 * Renders the Not Found page.
 */
const NotFound: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <ErrorBoundary fallback={<Error />}>
      <CenterMiddleContainer>
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-lg">{t("not_found.page_not_found")}</p>
        <Button onClick={() => navigate(Path.HOME)}>{t("shared.home")}</Button>
      </CenterMiddleContainer>
    </ErrorBoundary>
  );
};

export default NotFound;
