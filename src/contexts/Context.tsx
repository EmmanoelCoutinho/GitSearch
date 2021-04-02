import { createContext, ReactNode, useState, useContext } from "react";

import { light } from "../styles/themes/light";
import { dark } from "../styles/themes/dark";

import { ThemeContext } from "styled-components";

interface Ichildren {
  children: ReactNode;
}

interface Iexported {
  tradeTheme: () => void;
  theme: {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiaty: string;

      neutro: string;

      background: string;
      hover: string;
      focus: string;
      button: string;
    };
  };
}

export const Context = createContext({} as Iexported);

export function Provider({ children }: Ichildren) {
  const { title } = useContext(ThemeContext);

  const [theme, setTheme] = useState(light);

  const tradeTheme = () => {
    setTheme(title === "light" ? dark : light);
  };

  return (
    <Context.Provider value={{ tradeTheme, theme }}>
      {children}
    </Context.Provider>
  );
}
