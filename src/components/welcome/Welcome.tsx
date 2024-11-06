import {
  AppNameText,
  LoginImage,
  WelcomeText,
} from "src/components/welcome/Welcome.styled";

import { t } from "i18next";

import logo from "/logo.png";

const Welcome: React.FC = () => {
  return (
    <>
      <LoginImage src={logo} alt={t("login.logo")} />
      <WelcomeText variant="h4">{t("login.welcome_to")}</WelcomeText>
      <AppNameText variant="h3">{t("shared.app_name")}</AppNameText>
    </>
  );
};

export default Welcome;
