import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

import { ThemeProvider } from "styled-components";
import { light } from "./styles/themes/light";
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
