import { ContainerHeader, BackButton, IconContainerHeader } from "./styles";

import ThemeSelector from "../ThemeSelector/index";

import { GiBackwardTime } from "react-icons/gi";
import { GoLogoGithub } from "react-icons/go";

interface IHeader {
  backButtonClick: () => void;
  tradeTheme(): void;
}

const Header: React.FC<IHeader> = ({ backButtonClick, tradeTheme }) => {
  return (
    <ContainerHeader>
      <BackButton onClick={backButtonClick}>
        <GiBackwardTime size="2rem" />
        Back To Main
      </BackButton>
      <IconContainerHeader>
        <GoLogoGithub size="5rem" />
      </IconContainerHeader>
      <ThemeSelector tradeTheme={tradeTheme} />
    </ContainerHeader>
  );
};

export default Header;
