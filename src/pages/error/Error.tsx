import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { CenterMiddleContainer } from "src/components/center-middle-container/CenterMiddleContainer";
import { Button } from "src/components/ui/button";
import { Path } from "src/utils/paths";

/**
 * Renders the Error page.
 */
const Error: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <CenterMiddleContainer>
      <h1 className="text-4xl font-bold">{t("error.oops")}</h1>
      <p className="text-lg">{t("error.something_went_wrong")}</p>
      <Button onClick={() => navigate(Path.HOME)}>{t("shared.home")}</Button>
    </CenterMiddleContainer>
  );
};

export default Error;
