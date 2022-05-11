import styled from "styled-components";

export const Connect = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const ConnectText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${(props: any) => props.theme.colors.slate};
  margin: 0px;
`;

export const ConnectLink = styled.a`
  margin: 0px;
  text-decoration: none;
  color: ${(props: any) => props.theme.colors.slate};
  &:hover {
    transform: scale(1);
    cursor: pointer;
    color: ${(props: any) => props.theme.colors.accent1};
  }
`;

export const PersonalSiteLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  padding:30px;
  @media ${(props: any) => props.theme.breakpoints.md} {
    padding: 20px 0px;
    justify-content: center;
    gap: 24px;
  }
`;
