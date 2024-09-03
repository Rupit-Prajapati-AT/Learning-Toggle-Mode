import App from "./App";
import React from "react";
import { theme } from "./theme";
import ReactDOM from "react-dom";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";

ReactDOM.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
