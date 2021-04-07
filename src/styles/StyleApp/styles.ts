import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.neutro};

  overflow: hidden;

  height: 100vh;
  width: 100vw;
`;

export const IconContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 0%;

  transform: translate(-50%);

  @media (max-width: 1080px) {
    top: 22%;
  }
  @media (min-width: 1024px) {
    top: 22%;
  }

  @media (max-width: 1024px) {
    opacity: 0;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  height: 35rem;

  border-radius: 5px;

  margin: auto;
  padding-left: 1rem;
`;

export const MainText = styled.h1`
  color: ${(props) => props.theme.colors.secundary};
  font-weight: 700;
  font-size: 4.5rem;
  line-height: 4.2rem;
  text-transform: uppercase;
  text-align: center;

  margin: 1rem 0;
`;

export const MainParagraph = styled.p`
  color: ${(props) => props.theme.colors.button};
  font-size: 1.8rem;
  font-weight: 400;

  margin-bottom: 2rem;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 2;

  margin-right: 1rem;
  margin-bottom: 1.5rem;

  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 40%;
    padding-top: 5rem;
  }
`;

export const MainInput = styled.input`
  margin-top: 0.5rem;
  padding-left: 0.8rem;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 400;

  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.4);
  border: 1px solid ${(props) => props.theme.colors.secundary};
  border-radius: 5px;

  width: 100%;
  height: 3.5rem;

  color: ${(props) => props.theme.colors.secundary};
  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.secundary};
  }
  &:focus {
    outline: none;
    box-shadow: 1px 2px 20px ${(props) => props.theme.colors.tertiaty};
  }

  @media (min-width: 768px) {
    width: 70%;
    max-width: 640px;
    border-radius: 5px 0 0 5px;
    margin: 0;
  }
`;

export const MainButton = styled.button`
  width: 40%;
  height: 3.5rem;

  background-color: ${(props) => props.theme.colors.button};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 0px ${(props) => props.theme.colors.hover};

  color: ${(props) => props.theme.colors.background};
  font-size: 1.5rem;
  font-weight: 500;

  margin: 1rem auto;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    width: 30%;
    max-width: 220px;
    border-radius: 0 5px 5px 0;
    box-shadow: none;
    margin: 0;
  }
`;

export const MainFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;

  z-index: 2;

  width: 100%;
  height: 2.5rem;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const FooterText = styled.a`
  color: ${(props) => props.theme.colors.button};
  font-size: 1.4rem;
  font-weight: 400;
`;
