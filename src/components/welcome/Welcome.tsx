import { t } from "i18next";

import logoImg from "/logo.png";

const Welcome: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt={t("login.logo")} className="h-32 w-auto" />
      <h2 className="text-2xl text-muted-foreground mt-4">
        {t("login.welcome_to")}
      </h2>
      <h1 className="text-3xl font-bold text-primary mb-8">
        {t("shared.app_name")}
      </h1>
    </>
  );
};

export default Welcome;
