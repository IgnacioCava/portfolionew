import { useTranslation } from "react-i18next";
import * as S from "./styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { experiencesData } from "@lib/data";

interface ExperienceItemProps {
  item: number;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const ExperienceItem = ({ item, Icon }: ExperienceItemProps) => {
  const { t } = useTranslation();

  const data = experiencesData[item];

  return (
    <div className={S.ExperienceItemContainer}>
      <div className={S.ExperienceCard}>
        <div
          className={S.ExperienceTitle}
          style={assignInlineVars({ [S.dateVar]: `"${data.date}"` })}
        >
          {t(`section.experience.item${item}.title`)}
        </div>
        <div className={S.ExperienceLocation}>
          {t(`section.experience.item${item}.location`)}
        </div>
        <ul className={S.ExperienceDescription}>
          {t(`section.experience.item${item}.description`)
            .split("\n")
            .map((e) => (
              <li>{e}</li>
            ))}
        </ul>
      </div>
      <span
        className={S.ExperienceIcon}
        style={assignInlineVars({ [S.dateVar]: `"${data.date}"` })}
      >
        <Icon className={S.ExperienceSVG} height={28} width={28} fill="" />
      </span>
    </div>
  );
};

export default ExperienceItem;
