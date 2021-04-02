import styled from "styled-components";

export const ContainerPro = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  overflow-y: auto;
  width: 100vw;
`;

export const ContainerHeader = styled.div`
  position: fixed;

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
  width: 100%;
  height: 2rem;

  margin: 0.5rem auto;
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
  height: 5rem;

  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  margin-bottom: 0.7rem;
  padding: 0 0.5rem;
`;

export const NameRepos = styled.p`
  font-size: 1.6rem;
  font-weight: 500;

  color: ${(props) => props.theme.colors.button};

  @media (max-width: 315px) {
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
