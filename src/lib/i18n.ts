import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es } from "../locales";
import lngDetector from "./lngDetector";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    lng: lngDetector(),
    fallbackLng: "en",
    debug: false,
  });
