import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  background-size: cover;

  height: 100vh;
  width: 100vw;
`;
