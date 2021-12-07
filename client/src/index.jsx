import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";

import App from "./app.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6F00",
    },
    secondary: {
      main: "#FFAB00",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
