import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { resetCSS } from "./resetCSS";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${resetCSS};

   html[theme="dark"] {
      ${darkTheme}
   }

   html[theme="light"] {
      ${lightTheme}
   }

  body {
    color: ${Color.PRIMARY_BG};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: ${Color.PRIMARY_BG};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-family: 'Inter', sans-serif;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  button {
    border: none;
    transition: .3s;
    background-color: transparent;
    cursor: pointer;

    :active {
      opacity: 0.7;
    }
  }

  input {
    border: none;
    outline: none;
    background: transparent;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }
`;
