import { useContext, useState } from "react";

import {
  Container,
  IconContainer,
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
import { ApiContext } from "../contexts/apiContext";

const App: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { takeUserValue } = useContext(ApiContext);

  const [valeuInput, setValueInput] = useState("");
  //using this intermadiate value the function apiFetch() just work once;
  const [intermediate, setIntermediate] = useState("");

  takeUserValue(valeuInput);

  const onChange = (event: any) => {
    setIntermediate(event.target.value);
  };

  const onSubmit = () => {
    setValueInput(intermediate);
  };

  return (
    <IconContext.Provider
      value={{
        color: `${colors.neutro}`,
        size: "50rem",
      }}
    >
      <Container>
        <IconContainer>
          <GoLogoGithub />
        </IconContainer>
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
            <MainInput placeholder="Insert User Name" onChange={onChange} />
            <MainButton type="button" onClick={onSubmit}>
              Search
            </MainButton>
          </InputContainer>
        </MainContainer>
      </Container>
    </IconContext.Provider>
  );
};

export default App;
