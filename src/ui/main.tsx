import {
  createTheme,
  css,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { render } from "react-dom";

import App from "./App";

const theme = createTheme();
const globalStyles = css``;

render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles styles={globalStyles} />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
