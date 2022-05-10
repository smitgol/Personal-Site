import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  justify-content: flex-start;
  width: 80%;
  margin-top: 72px;
`;

export const HiiText = styled.div`
  font-size: 22px;
  color: ${(props:any) => props.theme.colors.accent1};
  letter-spacing: 0.5px;
  margin: 0;
  font-weight: 400;
  line-height: 1.2;
`;

export const NameText = styled.div`
  font-size: 72px;
  color: ${(props:any) => props.theme.colors.LightSlate};
  margin: 0;
  font-weight: 600;
  line-height: 1.2;
`;

export const BuildText = styled.div`
  font-size: 72px;
  color: ${(props:any) => props.theme.colors.slate};
  margin: 0;
  font-weight: 600;
  line-height: 1.2;
`;

export const DescriptionText = styled.div`
  font-size: 20px;
  color: #8892b0;
  margin: 0;
  width: 50%;
`;

export const Button = styled.a`
  border: 1px solid ${(props:any) => props.theme.colors.accent1};
  background-color: transparent;
  color: ${(props:any) => props.theme.colors.accent1};
  font-weight: 400;
  font-size: 16px;
  padding: 1.25rem 1.75rem;
  border-radius: 6px;
  line-height: 1;
  cursor: pointer;
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    outline: none;
  }
`;

export const ButtonGroup = styled.div`
  margin: 0;
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;
