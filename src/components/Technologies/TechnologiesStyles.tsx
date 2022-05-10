import styled from "styled-components";

export const Container = styled.div`
  margin-top: 64px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: space-around;
`;

export const TabElements = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 48px;
  flex-direction: row;
  border-bottom: 1px solid transparent;
`;

export const TabElement = styled.div`
  color: ${(props: any) => props.theme.colors.LightestSlate};
  font-size: 26px;
  font-weight: 600;
  padding: 5px;
  &: hover {
    border-bottom: 2px solid ${(props: any) => props.theme.colors.accent1};
    cursor: pointer;
  }
`;

export const SkillRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: row;
  gap: 36px;
  height: 200px;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const SkillTitle = styled.span`
  margin-left: 0;
  font-size: 23px;
  font-weight: 600;
  line-spacing: 1;
  color: ${(props: any) => props.theme.colors.LightSlate};
`;

export const SkillList = styled.ul`
  justify-self: start;
  list-style: none
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SkillElement = styled.li`
  padding: 10px 0px;
  color: ${(props: any) => props.theme.colors.slate};
  font-size: 18px;
`;
