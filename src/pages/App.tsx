import { useCallback, useState, useEffect } from "react";

import Header from "../components/Header/index";
import ThemeSelector from "../components/ThemeSelector/index";

import {
  Container,
  IconContainer,
  MainContainer,
  MainText,
  MainParagraph,
  MainInput,
  InputContainer,
  MainButton,
  MainFooter,
  FooterText,
} from "../styles/StyleApp/styles";
import {
  ContainerProfile,
  ContainerProfileInfos,
  ProfilePicture,
  ContainerInfos,
  TextInfos,
  LoginText,
  ContainerReposInner,
  ContainerRepos,
  NameRepos,
  StarsRepos,
  LinkRepos,
  ContainerPro,
} from "../styles/StylesProfille/styles";

//themes section
import { ThemeProvider } from "styled-components";
import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";

import { GoLogoGithub } from "react-icons/go";
import { GiStarsStack } from "react-icons/gi";
import { RiGithubLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const App: React.FC = () => {
  const url = "https://api.github.com/users";
  const clientId = process.env.REACT_APP_GITHUB_PUBLIC;
  const clientSecret = process.env.REACT_APP_GITHUB_SECRET;

  const [mainLayout, setMainLayout] = useState(true);
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem("currentTheme");

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return light;
    }
  });

  const [user, setUser] = useState("");
  const [intermadiate, setIntemadiate] = useState("");
  const [dataUser, setDataUser] = useState({
    avatar_url: "",
    repos_url: "",
    html_url: "",
    public_repos: 0,
    followers: 0,
    following: 0,
    login: "",
  });
  const [dataRepos, setDataRepos] = useState([]);

  const apiFetchUser = useCallback(async () => {
    try {
      const dataResponse = await fetch(
        `${url}/${user}?client_id=${clientId}&client_secret=${clientSecret}`
      );
      const data = await dataResponse.json();
      setDataUser({
        avatar_url: data.avatar_url,
        repos_url: data.repos_url,
        html_url: data.html_url,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        login: data.login,
      });
    } catch (err) {
      console.error(err);
    }
  }, [clientId, clientSecret, user]);

  const apiFetchRepos = useCallback(async () => {
    try {
      const dataReponseRepos = await fetch(`${dataUser.repos_url}`);
      const dataRepos = await dataReponseRepos.json();
      setDataRepos(dataRepos);
    } catch (err) {
      console.error(err);
    }
  }, [dataUser.repos_url]);

  useEffect(() => {
    localStorage.setItem("currentTheme", JSON.stringify(theme));
    apiFetchUser();
    apiFetchRepos();
  }, [apiFetchUser, apiFetchRepos, user, theme]);

  const onChange = (event: any) => {
    setIntemadiate(event.target.value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    setUser(intermadiate);
    setMainLayout(false);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };

  const backButtonClick = () => {
    setMainLayout(true);
  };

  const tradeTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider
        value={{
          size: "50rem",
        }}
      >
        {mainLayout ? (
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
                <MainInput
                  placeholder="Insert User Name"
                  onChange={onChange}
                  onKeyDown={handleKeyDown}
                />
                <MainButton type="button" onClick={onSubmit}>
                  Search
                </MainButton>
              </InputContainer>
            </MainContainer>
            <MainFooter>
              <FooterText href="https://github.com/EmmanoelCoutinho">
                Made by: @EmmanoelCoutinho
              </FooterText>
              <ThemeSelector tradeTheme={tradeTheme} />
            </MainFooter>
          </Container>
        ) : (
          <ContainerPro>
            <Header backButtonClick={backButtonClick} tradeTheme={tradeTheme} />
            <ContainerProfile>
              <ContainerProfileInfos>
                <ProfilePicture src={dataUser.avatar_url} />
                <LoginText href={dataUser.html_url}>{dataUser.login}</LoginText>
                <ContainerInfos>
                  <TextInfos>Followers: {dataUser.followers}</TextInfos>
                  <TextInfos>Following: {dataUser.following}</TextInfos>
                </ContainerInfos>
              </ContainerProfileInfos>
              <ContainerRepos>
                {dataRepos.map((data: any) => (
                  <ContainerReposInner key={data.id}>
                    <NameRepos>{data.name}</NameRepos>
                    <StarsRepos>
                      {data.stargazers_count}
                      <GiStarsStack size="1.5rem" />
                    </StarsRepos>
                    <p>{data.language}</p>
                    <LinkRepos href={data.url}>Link To Repo</LinkRepos>
                  </ContainerReposInner>
                ))}
              </ContainerRepos>
            </ContainerProfile>
          </ContainerPro>
        )}
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default App;
