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

button,a {
  cursor: pointer;
}

div:focus {
  outline: none;
}
`;
