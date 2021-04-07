import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

// import { Provider } from "./contexts/Context";

// import { ThemeContext } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
