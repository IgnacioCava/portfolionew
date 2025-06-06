import { Bold } from "@components";
import { Trans, useTranslation } from "react-i18next";
import * as S from "./styles.css";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={S.AboutSectionContainer}>
      <h1>{t("section.about.title")}</h1>
      <p className={S.AboutNormalText}>
        <Trans i18nKey={"section.about.introduction"}>
          I had my first taste of programming in highschool, where I learned
          Ladder, Assembly and a bit of C and C++. It was there that I realized
          my love for programming, and I just knew I wanted to continue doing
          this for a living. After that, I decided to enroll in a coding
          bootcamp, where I learned <Bold>full-stack web development</Bold>.
        </Trans>
      </p>
      <p className={S.AboutNormalText}>
        <Trans i18nKey={"section.about.stack"}>
          My core stack is
          <Bold>React, Next.js, Node.js, Express.js, GraphQL, PostgreSQL</Bold>
          and <Bold>MongoDB</Bold>, along with <Bold>TypeScript</Bold> and
          <Bold>Prisma</Bold> or <Bold>Sequelize</Bold>. I'm always eager to
          learn new technologies.
        </Trans>
      </p>
    </section>
  );
};

export default AboutSection;
