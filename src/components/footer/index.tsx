import { useTranslation } from "react-i18next";
import * as S from "./styles.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={S.FooterText}>
      {t("component.footer.text")
        .split("\n")
        .map((text) => (
          <div>{text}</div>
        ))}
    </footer>
  );
};

export default Footer;
