import GlobalStyle from "common/globalStyle";
import React from "react";
import Router from "Router";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <Router></Router>
      <GlobalStyle></GlobalStyle>
    </CookiesProvider>
  );
}

export default App;
