import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

import { ApiProvider } from "./contexts/apiContext";

import { ThemeProvider } from "styled-components";
import { light } from "./styles/themes/light";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <ApiProvider>
    <ThemeProvider theme={light}>
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </ApiProvider>,
  document.getElementById("root")
);
