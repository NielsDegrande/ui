import { Typography } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";

import { CenterMiddleContainer } from "src/components/center-middle-container/CenterMiddleContainer";
import { PrimaryButton } from "src/components/primary-button/PrimaryButton";
import Error from "src/pages/error/Error";

/**
 * Renders the Not Found page.
 */
const NotFound = () => {
  const { t } = useTranslation();
  return (
    <ErrorBoundary fallback={<Error />}>
      <CenterMiddleContainer>
        <Typography variant="h1">404</Typography>
        <Typography>{t("not_found.page_not_found")}</Typography>
        <PrimaryButton href="/">{t("shared.home")}</PrimaryButton>
      </CenterMiddleContainer>
    </ErrorBoundary>
  );
};

export default NotFound;
