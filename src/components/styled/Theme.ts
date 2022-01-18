import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
    background-color: ${(props) => props.theme.pallete.backgroundPrimary};
    padding: 0;
    margin: 0;
    }
`;

export const theme: DefaultTheme = {
  pallete: {
    backgroundPrimary: "#dde4eb",
    navigationBackground: "#444950",
    white: "#fff",
  },
  queries: {
    mobile: "(max-width: 480px)",
    tablet: "(max-width: 768px)",
  },
};
