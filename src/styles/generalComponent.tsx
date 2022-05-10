import styled from "styled-components";

export const SectionTitle = styled.span`
  display: contents;
  font-size: 24px;
  font-weight: 600;
  color: ${(props: any) => props.theme.colors.LightSlate};
  text-align: left;
  margin: 0;
  float: left;
  &:after {
    content: "";
    display: block;
    position: relative;
    top: 0px;
    width: 250px;
    height: 1px;
    margin-left: 20px;
    background-color: ${(props: any) => props.theme.colors.lightestNavy};
    left: -2px;
  }
`;

export const SectionTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  margin-top: 78px;
`;
