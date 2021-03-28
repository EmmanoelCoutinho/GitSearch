import { useContext } from "react";
import { ApiContext } from "../contexts/apiContext";

import { Container } from "../styles/StyleApp/style";
import { GoLogoGithub } from "react-icons/go";

const App: React.FC = () => {
  const { dataUser } = useContext(ApiContext);

  return (
    <Container>
      <GoLogoGithub />
      <p>{dataUser.avatar_url}</p>
      <p>{dataUser.bio}</p>
      <p>{dataUser.followers} seguidores</p>
      <p>{dataUser.following}</p>
      <p>{dataUser.html_url}</p>
      <p>{dataUser.login}</p>
      <p>{dataUser.name}</p>
      <p>{dataUser.public_repos} repos</p>
    </Container>
  );
};

export default App;
