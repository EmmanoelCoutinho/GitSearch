import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%; /* == 15px */
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%; /* == 14px */
  }
}

body {
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.secundary};
  overflow: hidden;
}

body,
input,
textarea,
button {
  font: 300 1rem 'Oswald', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

.icon {
  translate:rotate(90deg);
}
`;
