import me from "../../assets/me.jpg";
import * as S from "./styles.css";
import CV from "../../assets/pdf/CV Ignacio Cava - En.pdf";
import {
  //ArrowRight,
  DownloadIcon,
  LinkedInIcon,
  GitHubIcon,
} from "../../assets/svg";
import { Bold } from "@components";
import { Trans, useTranslation } from "react-i18next";

const HomeSection = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className={S.HomeSectionContainer}>
      <img
        src={me}
        alt="me"
        className={S.MyImage}
        loading="eager"
        draggable={false}
      />
      <h1 className={S.SectionTitle}>
        <Trans i18nKey={"section.home.title"}>
          Hi, I'm <Bold>Ignacio!</Bold>
          {"\n"}A <Bold>full-stack developer</Bold> with{" "}
          <Bold>3 years of experience</Bold>.{"\n"}I enjoy building beautiful
          sites & apps.{"\n"}
          My focus is <Bold>React & Node</Bold>.
        </Trans>
      </h1>
      <div className={S.ContactOptions}>
        <a href="#contact" className={S.ContactButton} draggable={false}>
          {t("Contact me here")} {/*<ArrowRight height={20} width={20} />*/}
        </a>
        <a className={S.CVButton} href={CV} download draggable={false}>
          {t("Download CV")} <DownloadIcon height={20} width={20} />
        </a>
        <a
          className={S.SocialMediaButton}
          href="https://linkedin.com/in/ignacio-cava"
          target="_blank"
          draggable={false}
        >
          <LinkedInIcon height={20} width={20} />
        </a>
        <a
          className={S.SocialMediaButton}
          href="https://github.com/IgnacioCava"
          target="_blank"
          draggable={false}
        >
          <GitHubIcon height={20} width={20} />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
