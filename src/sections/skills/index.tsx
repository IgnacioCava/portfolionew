import { useTranslation } from "react-i18next";
import * as S from "./styles.css";
import { backendSkills, frontendSkills, platforms } from "@lib/data";

const SkillsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className={S.SkillSectionContainer}>
      <h1>{t("section.skills.title")}</h1>
      <div className={S.Skills}>
        <div className={S.SkillStack}>
          <span className={S.SkillStackTitle}>Frontend</span>
          <div className={S.SkillsList}>
            {frontendSkills.map((s) => (
              <span className={S.SkillItem}>{s}</span>
            ))}
          </div>
        </div>
        <div className={S.SkillStack}>
          <span className={S.SkillStackTitle}>Backend</span>
          <div className={S.SkillsList}>
            {backendSkills.map((s) => (
              <span className={S.SkillItem}>{s}</span>
            ))}
          </div>
        </div>
        <div className={S.SkillStack}>
          <span className={S.SkillStackTitle}>{t("section.skills.tools")}</span>
          <div className={S.SkillsList}>
            {platforms.map((s) => (
              <span className={S.SkillItem}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
