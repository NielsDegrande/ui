import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { CenterMiddleContainer } from "src/components/center-middle-container/CenterMiddleContainer";
import { PrimaryButton } from "src/components/primary-button/PrimaryButton";

/**
 * Renders the Error page.
 */
const Error = () => {
  const { t } = useTranslation();
  return (
    <CenterMiddleContainer>
      <Typography variant="h1">{t("error.oops")}</Typography>
      <Typography>{t("error.something_went_wrong")}</Typography>
      <PrimaryButton href="/">{t("shared.home")}</PrimaryButton>
    </CenterMiddleContainer>
  );
};

export default Error;
