import { useTranslation } from "react-i18next";
import { LanguageSelectorContainer, LanguageToggler } from "./styles.css";
import { ARGFlag, USAFlag } from "@assets/svg";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div
      className={LanguageSelectorContainer}
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "es" : "en")}
    >
      <div className={LanguageToggler({ en: i18n.language === "en" })}>
        {i18n.language === "en" ? (
          <USAFlag height={30} width={30} />
        ) : (
          <ARGFlag height={30} width={30} />
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
