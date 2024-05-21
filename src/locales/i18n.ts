import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "src/locales/en/translation.json";

void i18next.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
  },
});
