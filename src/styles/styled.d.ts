import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
  }
}
