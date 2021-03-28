import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiaty: string;

      black: string;

      background: string;
      focus: string;
      button: string;
    };
  }
}
