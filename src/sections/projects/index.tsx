import { ProjectCard } from "@components";
import * as S from "./styles.css";
import image from "@assets/warframe.jpg";
import { projects } from "@lib/data";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className={S.ProjectSectionContainer}>
      <h1>{t("section.projects.title")}</h1>
      <div className={S.ProjectList}>
        {projects.map((project, index) => (
          <ProjectCard
            item={index}
            title={project.title}
            description={project.description}
            techStack={project.stack}
            links={project.links}
            image={image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
