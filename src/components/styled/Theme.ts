import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
    background-color: ${(props) => props.theme.pallete.backgroundPrimary};
    }
`;

export const theme: DefaultTheme = {
  pallete: { backgroundPrimary: "rgb(0, 30, 60)" },
};
