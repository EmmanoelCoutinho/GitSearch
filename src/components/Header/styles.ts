import styled from "styled-components";

export const ContainerHeader = styled.div`
  position: fixed;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.primary};

  padding: 0 0.5rem;
`;

export const IconContainerHeader = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
`;

export const BackButton = styled.a`
  display: flex;
  align-items: center;

  font-weight: 500;
`;
