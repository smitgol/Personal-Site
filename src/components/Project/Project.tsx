import {
  Container,
  ProjectsElements,
  ProjectElement,
  ProjectImageDiv,
  ProjectContent,
  ProjectContentTitle,
  ProjectContentOutlined,
  ProjectContentDescription,
  ProjectStackList,
  ProjectStackElement,
  ProjectLinks,
  ProjectLinkElement,
} from "./ProjectStyles";

import test_img from "../../images/crypto_hunter.jpg";
import Image from "next/image";
import { AiOutlineGithub, AiOutlineSelect } from "react-icons/ai";
import { projectData } from "../../data/projectdata";

interface ProjectInterFace {
  title: string;
  description: string;
  stack: [];
  img: any;
  github_link: string;
  website_link: string;
}

const Project: React.FC = () => {
  const renderProjectComponent = () => {
    return projectData.map((project: ProjectInterFace, index) => {
      let condition = index % 2 == 0;
      let content_class = condition ? "project-content-odd" : "";
      let image_class = condition ? "project-image-parent-odd" : "";
      let link_class = condition ? "project-links-odd" : "";

      return (
        <ProjectElement key={index}>
          <ProjectContent className={`project-content ${content_class}`}>
            <ProjectContentOutlined>Featured Project</ProjectContentOutlined>
            <ProjectContentTitle>{project.title}</ProjectContentTitle>
            <ProjectContentDescription>
              {project.description}
            </ProjectContentDescription>
            <ProjectStackList>
              {project.stack.map((stack: string) => {
                return (
                  <ProjectStackElement key={stack}>{stack}</ProjectStackElement>
                );
              })}
            </ProjectStackList>
            <ProjectLinks className={link_class}>
              {project.github_link && (
                <ProjectLinkElement href={project.github_link} target="__blank">
                  <AiOutlineGithub size="2.5rem"></AiOutlineGithub>
                </ProjectLinkElement>
              )}
              {project.website_link &&
              <ProjectLinkElement href={project.github_link} target="__blank">
                <AiOutlineSelect size="2.5rem"></AiOutlineSelect>
              </ProjectLinkElement>}
            </ProjectLinks>
          </ProjectContent>
          <ProjectImageDiv className={`project-image-parent ${image_class}`}>
            <Image
              src={project.img}
              height={360}
              width={620}
              className="project-image"
            ></Image>
          </ProjectImageDiv>
        </ProjectElement>
      );
    });
  };
  return (
    <Container>
      <ProjectsElements>{renderProjectComponent()}</ProjectsElements>
    </Container>
  );
};

export default Project;
