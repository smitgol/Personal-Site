import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 2px;
  padding: 8px 0px;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-size: 1.8rem;
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  transform: translateY(0px);
  @media ${(props: any) => props.theme.breakpoints.md} {
    position: fixed;
    top: 0;
    background-color: ${(props: any) => props.theme.colors.navy};
    flex-direction: column;
    gap: 20px;
  }
`;

export const PortfolioDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  gap: 48px;
`;
export const PortfolioLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  gap: 48px;
  width: 480px;
  @media ${(props: any) => props.theme.breakpoints.md} {
    display: none;
    justify-content: center;
    width: auto;
  }
`;
export const PortfolioSocial = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 8px;
  @media ${(props: any) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const PortfolioText = styled.div`
  color: #a8b2d1;
`;

export const PortfolioSymbolAndText = styled.a`
  display: flex;
  align-items: center;
  color: #a8b2d1;
  transition: 0.3s ease;
  gap: 4px;
  &:hover {
    cursor: pointer;
    color: ${(props: any) => props.theme.colors.accent1};
  }
  font-size: 20px;
`;
export const PortfolioLink = styled.a`
  transition: 0.3s ease;
  &:hover {
    cursor: pointer;
    color: ${(props: any) => props.theme.colors.accent1};
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: #a8b2d1;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    color: ${(props: any) => props.theme.colors.accent1};
  }
`;

export const NavigationButton = styled.div`
  display: none;
  @media ${(props: any) => props.theme.breakpoints.md} {
    display: block;
  }
  transition: 0.3s ease;
  &:hover {
    cursor: pointer;
    color: ${(props: any) => props.theme.colors.accent1};
  }
`;
