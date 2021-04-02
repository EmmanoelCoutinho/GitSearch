import { useCallback, useState, useContext, useEffect } from "react";

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
import {
  ContainerHeader,
  BackButton,
  IconContainerHeader,
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
import { ThemeContext } from "styled-components";

import { GoLogoGithub } from "react-icons/go";
import { GiBackwardTime } from "react-icons/gi";
import { GiStarsStack } from "react-icons/gi";
import { RiGithubLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const App: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const url = "https://api.github.com/users";
  const clientId = process.env.REACT_APP_GITHUB_PUBLIC;
  const clientSecret = process.env.REACT_APP_GITHUB_SECRET;

  const [mainLayout, setMainLayout] = useState(true);
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
    apiFetchUser();
    apiFetchRepos();
  }, [apiFetchUser, apiFetchRepos, user]);

  const onChange = (event: any) => {
    setIntemadiate(event.target.value);
  };

  const onSubmit = () => {
    setUser(intermadiate);
    setMainLayout(false);
  };

  return (
    <IconContext.Provider
      value={{
        color: `${colors.neutro}`,
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
              <MainInput placeholder="Insert User Name" onChange={onChange} />
              <MainButton type="button" onClick={onSubmit}>
                Search
              </MainButton>
            </InputContainer>
          </MainContainer>
        </Container>
      ) : (
        <ContainerPro>
          <ContainerHeader>
            <BackButton
              onClick={() => {
                setMainLayout(true);
              }}
            >
              <GiBackwardTime size="2rem" />
              Back To Main
            </BackButton>
            <IconContainerHeader>
              <GoLogoGithub size="5rem" />
            </IconContainerHeader>
          </ContainerHeader>
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
                  <NameRepos key={data.name}>{data.name}</NameRepos>
                  <StarsRepos key={data.stargazers_count}>
                    {data.stargazers_count}
                    <GiStarsStack size="1.5rem" />
                  </StarsRepos>
                  <p key={data.language}>{data.language}</p>
                  <LinkRepos key={data.url} href={data.url}>
                    Link To Repo
                  </LinkRepos>
                </ContainerReposInner>
              ))}
            </ContainerRepos>
          </ContainerProfile>
        </ContainerPro>
      )}
    </IconContext.Provider>
  );
};

export default App;
