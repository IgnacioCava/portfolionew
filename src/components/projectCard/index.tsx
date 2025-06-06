import { useTranslation } from "react-i18next";
import * as S from "./styles.css";
import { WeatherApp, Discord, Messenger, Trello } from "@assets/png";
import { GitHubIcon, Internet } from "@assets/svg";
interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  item: number;
  links: {
    github: string;
    deploy: string;
  };
}

const SelectImage = (i: number) => {
  if (i === 0) return Discord;
  if (i === 1) return Messenger;
  if (i === 2) return WeatherApp;
  if (i === 3) return Trello;
};

const ProjectCard = ({ title, techStack, item, links }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={S.ProjectCardContainer}>
      <div className={S.ProjectLinkContainer}>
        {links.github ? (
          <a
            className={S.ProjectLink}
            href={links.github}
            target="__blank"
            draggable={false}
          >
            <GitHubIcon height={30} width={30} />
          </a>
        ) : null}
        {links.deploy ? (
          <a
            className={S.ProjectLink}
            href={links.deploy}
            target="__blank"
            draggable={false}
          >
            <Internet height={30} width={30} />
          </a>
        ) : null}
      </div>
      <div className={S.ProjectData}>
        <h2 className={S.ProjectTitle}>{title}</h2>
        <span className={S.ProjectDescription}>
          {t(`section.projects.item${item}.description`)}
        </span>
        <div className={S.ProjectTechList}>
          {techStack.map((tech) => (
            <span className={S.ProjectTechItem}>{tech}</span>
          ))}
        </div>
      </div>
      <img src={SelectImage(item)} alt={title} className={S.ProjectImage} />
    </div>
  );
};

export default ProjectCard;
