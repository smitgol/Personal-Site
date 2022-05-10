import { useRef, useState } from "react";
import {
  Container,
  TabElements,
  TabElement,
  SkillRow,
  SkillTitle,
  SkillList,
  SkillElement,
  SkillContainer,
} from "./TechnologiesStyles";
import { technologydata } from "../../data/technologydata";

const Technologies: React.FC = () => {
  const TabList = ["web2", "web3"];
  const [activeTab, setActiveTab] = useState<string>(TabList[0]);
  const handleToggle = (name: string) => {
    setActiveTab(name);
  };

  const renderTechnologies = () => {
    return TabList.map((name, index) => {
      const active_class = activeTab == name ? "toggle__active" : "";
      return (
        <TabElement
          key={index}
          onClick={() => {
            handleToggle(name);
          }}
          className={active_class}
        >
          {name}
        </TabElement>
      );
    });
  };

  const renderSkills = () => {
    const skills = technologydata[activeTab];
    if (Array.isArray(skills) == false) {
      return (
        <SkillRow>
          {Object.keys(skills).map((key) => {
            return (
              <SkillContainer>
                <SkillTitle>{key}</SkillTitle>
                <SkillList key={key}>
                  {skills[key].map((skill) => {
                    return <SkillElement key={skill}>{skill}</SkillElement>;
                  })}
                </SkillList>
              </SkillContainer>
            );
          })}
        </SkillRow>
      );
    }
    //if typeof skills === ''
    //<SkillRow>
    //  <SkillTitle>Frontend</SkillTitle>
    //  <SkillTitle>Backend</SkillTitle>
    //</SkillRow>;
  };

  return (
    <Container>
      <TabElements>{renderTechnologies()}</TabElements>
      {renderSkills()}
    </Container>
  );
};

export default Technologies;
