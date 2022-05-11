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
  @media ${(props: any) => props.theme.breakpoints.md} {
    font-size: 20px;
    &:after {
      width: 250px;
      top: 2px;
      left: -5px;
    }
  }
  @media ${(props: any) => props.theme.breakpoints.sm} {
    font-size: 19.5px;
    &:after {
      width: 200px;
      top: 0px;
      left: 0px;
    }
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
  @media ${(props: any) => props.theme.breakpoints.md} {
    width: 90%;
  }
`;
