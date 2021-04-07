import { useContext } from "react";

import { ThemeContext } from "styled-components";

import Switch from "react-switch";

interface IThemeSelector {
  tradeTheme: () => void;
}

const ThemeSelector: React.FC<IThemeSelector> = ({ tradeTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Switch
      onChange={tradeTheme}
      checked={title === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
      height={15}
      width={50}
      handleDiameter={20}
      onColor={colors.neutro}
      offColor={colors.neutro}
    />
  );
};

export default ThemeSelector;
