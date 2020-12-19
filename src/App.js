import GlobalStyle from "common/globalStyle";
import React from "react";
import Router from "Router";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "styled-components";
import theme from "common/theme";

function App() {
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <Router></Router>
        <GlobalStyle></GlobalStyle>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
