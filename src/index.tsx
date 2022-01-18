import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styled";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
