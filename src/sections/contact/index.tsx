import { EmailSent, Underline } from "@components";
import * as S from "./styles.css";
import useCopyToClipboard from "@hooks/useCopyToClipboard";
import sendEmail from "../../helpers/sendEmail";
import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const ContactSection = () => {
  const { t } = useTranslation();
  const [emailSentResponse, setEmailSentResponse] = useState("");
  const { copied, copy } = useCopyToClipboard("cavaignacio11@gmail.com", 3000);
  const [error, setError] = useState<{ email: string; message: string }>({
    email: "",
    message: "",
  });
  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    const element = (event.target as HTMLInputElement | HTMLTextAreaElement)
      .name;
    setError({ ...error, [element]: "" });
  };

  const handleSendEmail = async (event: FormEvent<HTMLFormElement>) => {
    const response = await sendEmail(event);
    if (response.error) {
      if (response.error === "RATE_LIMIT_REACHED")
        setEmailSentResponse(response.error);
      else setError(response.error);
    } else {
      setEmailSentResponse(response.message);
      setError({
        email: "",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className={S.ContactSectionContainer}>
      <h1>{t("section.contact.title")}</h1>
      {emailSentResponse ? (
        <EmailSent res={emailSentResponse} />
      ) : (
        <>
          <span className={S.ContactDescription}>
            {t("section.contact.description-before-mail")}{" "}
            <a
              href="mailto:cavaignacio11@gmail.com"
              className={S.ContactEmail({ copied })}
              style={assignInlineVars({
                [S.emailCopiedMessage]: `"${t("Email copied")}"`,
              })}
            >
              <Underline onClick={copy}>cavaignacio11@gmail.com</Underline>
            </a>{" "}
            {t("section.contact.description-after-mail")}
          </span>
          <form
            className={S.ContactForm}
            onSubmit={handleSendEmail}
            onChange={handleChange}
          >
            <div className={S.ContactFormInputContainer}>
              <input
                name="email"
                autoComplete="off"
                className={S.ContactFormInput({ error: !!error.email })}
                placeholder={t("section.contact.input-placeholder")}
                maxLength={500}
              />
              <span className={S.FormError({ error: !!error.email })}>
                {error.email
                  ? t(`section.contact.error.email.${error.email}`)
                  : ""}
              </span>
            </div>
            <div className={S.ContactFormInputContainer}>
              {" "}
              <textarea
                name="message"
                className={S.ContactFormTextArea({ error: !!error.message })}
                placeholder={t("section.contact.textarea-placeholder")}
                maxLength={5000}
              />
              <span className={S.FormError({ error: !!error.message })}>
                {error.message
                  ? t(`section.contact.error.message.${error.message}`)
                  : ""}
              </span>
            </div>
            <button className={S.ContactFormSubmit} type="submit">
              {t("Submit")}
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default ContactSection;
