import { EmailSentContainer } from "./styles.css";
import { useTranslation } from "react-i18next";

const EmailSent = ({ res }: { res: string }) => {
  const { t } = useTranslation();
  return (
    <div className={EmailSentContainer}>
      {t(`section.contact.message-sent.${res}`)}
    </div>
  );
};

export default EmailSent;
