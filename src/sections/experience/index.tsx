import { ExperienceItem } from "@components";
import * as S from "./styles.css";
import { Education, Work } from "@assets/svg";
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className={S.ExperienceSectionContainer}>
      <h1>{t("section.experience.title")}</h1>
      <div className={S.ExperienceGraph}>
        <ExperienceItem item={0} Icon={Education} />
        <ExperienceItem item={1} Icon={Work} />
        <ExperienceItem item={2} Icon={Work} />
        <ExperienceItem item={3} Icon={Work} />
      </div>
    </section>
  );
};

export default ExperienceSection;
