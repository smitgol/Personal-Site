import styled from "styled-components";

export const Container = styled.div`
  margin-top: 92px;
  width: 80%;
  @media ${(props: any) => props.theme.breakpoints.md} {
    width: 90%;
  }
`;

export const ProjectsElements = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 102px;
`;

export const ProjectElement = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;
  @media ${(props: any) => props.theme.breakpoints.md} {
    background-color: ${(props: any) => props.theme.colors.background2};
  }
`;

export const ProjectImageDiv = styled.div`
  display: block;
  max-width: 700px;
  height: auto;
  grid-area: 1 / 7 / -1 / -1;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px -15px rgb(2 12 27 / 70%);
  margin: 0;
  bottom: 0;
  background-color: ${(props: any) => props.theme.colors.accent1};
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0px;
    z-index: 3;
    transition: var(--transition);
    background-color: ${(props: any) => props.theme.colors.navy};
    mix-blend-mode: screen;
  }
  &:hover {
    filter: none;
    -webkit-filter: grayscale(0%);
  }
  @media ${(props: any) => props.theme.breakpoints.md} {
    grid-area: 1 / 1 / -1 / 12;
    background-color: inherit;
    height: auto;
    box-shadow: none;
    filter: none;
  }
`;

export const ProjectContent = styled.div`
  grid-area: 1 / 1 / -1 / 8;
  position: relative;
  @media ${(props: any) => props.theme.breakpoints.md} {
    grid-area: 1 / 1 / -1 / 12;
    z-index: 20;
  }
`;

export const ProjectContentOutlined = styled.div`
  font-size: 16px;
  color: ${(props: any) => props.theme.colors.accent1};
  font-weight: 500;
  margin: 10px 0px;
  @media ${(props: any) => props.theme.breakpoints.md} {
    padding: 5px 20px;
  }
`;
export const ProjectContentTitle = styled.div`
  font-size: 28px;
  color: ${(props: any) => props.theme.colors.LightSlate};
  font-weight: 700;
  margin: 10px 0px;
  @media ${(props: any) => props.theme.breakpoints.md} {
    padding: 0px 20px;
  }
`;

export const ProjectContentDescription = styled.div`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  position: relative;
  z-index: 2;
  padding: 25px;
  margin-top: 30px;
  background-color: ${(props: any) => props.theme.colors.background2};
  color: ${(props: any) => props.theme.colors.LightSlate};
  font-size: 16px;
  @media ${(props: any) => props.theme.breakpoints.md} {
    background-color: transparent;
    box-shadow: none;
    font-size: 18px;
    font-weight: 500;
    z-index: 20;
  }
`;

export const ProjectStackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
  list-style: none;
  &:nth-of-type(2n + 1) {
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
`;
export const ProjectStackElement = styled.li`
  margin: 0px 20px 5px 0px;
  color: ${(props: any) => props.theme.colors.LightestSlate};
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  @media ${(props: any) => props.theme.breakpoints.md} {
    background-color: transparent;
    box-shadow: none;
    font-size: 18px;
    font-weight: 600;
    z-index: 20;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;
  flex-wrap: wrap;
  z-index: 2;
  color: ${(props: any) => props.theme.colors.LightestSlate};
`;

export const ProjectLinkElement = styled.a`
  padding: 10px;
  margin: 0px;
  color: ${(props: any) => props.theme.colors.LightestSlate};
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    color: ${(props: any) => props.theme.colors.accent1};
  }
`;
