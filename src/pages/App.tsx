import { useContext } from "react";

import {
  Container,
  IconContainerRight,
  IconContainerLeft,
  MainContainer,
  MainText,
  MainParagraph,
  MainInput,
  InputContainer,
  MainButton,
} from "../styles/StyleApp/style";
import { ThemeContext } from "styled-components";

import { GoLogoGithub } from "react-icons/go";
import { RiGithubLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const App: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <IconContext.Provider
      value={{
        color: `${colors.neutro}`,
        size: "50rem",
      }}
    >
      <Container>
        <IconContainerLeft>
          <GoLogoGithub />
        </IconContainerLeft>
        <MainContainer>
          <MainText>
            Welcome to
            <br />
            GitSearch
          </MainText>
          <MainParagraph>
            here you can find any developer in the world
          </MainParagraph>
          <RiGithubLine size="15rem" />
          <InputContainer>
            <MainInput placeholder="Insert User Name" />
            <MainButton>Search</MainButton>
          </InputContainer>
        </MainContainer>
      </Container>
    </IconContext.Provider>
  );
};

export default App;
