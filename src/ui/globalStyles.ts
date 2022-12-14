import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./resetCSS";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
${resetCSS};
html[theme=dark] {
  ${darkTheme}
}
html[theme=light] {
  ${lightTheme}
}
`;
