import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

// import { Provider } from "./contexts/Context";
import { light } from "./styles/themes/light";
//import { dark } from "./styles/themes/dark";

import { ThemeProvider } from "styled-components";
// import { ThemeContext } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <ThemeProvider theme={light}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
