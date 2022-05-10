import { ThemeProvider } from "styled-components";

import theme from "../themes/default";
import GlobalStyles from "./global";
import React from "react";
import type {Children} from "../interfaces/index";

const Theme:React.FC<Children> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;