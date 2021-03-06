import styled from "styled-components";

export const ContainerPro = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.neutro};

  min-height: 100vh;
  width: 100vw;
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  min-height: 100%;

  margin: 0 auto 1rem;
`;

export const ContainerProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 22rem;

  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  margin: 4rem auto 2rem;
  padding-bottom: 0.5rem;

  @media (min-width: 1023px) {
    width: 60%;
  }
`;

export const ProfilePicture = styled.img`
  max-width: 12rem;
  width: auto;

  border-radius: 50%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  margin: 0.5rem auto;
`;

export const LoginText = styled.a`
  color: ${(props) => props.theme.colors.neutro};
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
`;

export const ContainerInfos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 2rem;

  margin: 2rem auto;
  padding-bottom: 1rem;
`;

export const TextInfos = styled.p`
  color: ${(props) => props.theme.colors.button};
  text-align: center;
  font-size: 1.5rem;
`;

export const ContainerRepos = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const ContainerReposInner = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  width: 80vw;
  height: 100%;

  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  margin-bottom: 1rem;
  padding: 0 0.5rem;
`;

export const NameRepos = styled.p`
  font-size: 1.6rem;
  font-weight: 500;

  color: ${(props) => props.theme.colors.button};

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`;

export const StarsRepos = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${(props) => props.theme.colors.neutro};
  font-size: 1.5rem;
  font-weight: 500;
`;

export const LinkRepos = styled.a`
  display: flex;
  justify-content: flex-end;

  font-size: 1.2rem;

  @media (max-width: 315px) {
    font-size: 0.9rem;
  }
`;
