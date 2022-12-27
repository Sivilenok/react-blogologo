import { css } from "styled-components";
import { Color } from "./colors";

export const darkTheme = css`
  --primary-text: ${Color.PRIMARY_TEXT};
  --primary-bg: ${Color.PRIMARY_BG};
  --secondary: ${Color.SECONDARY};
  --secondary-btn: ${Color.SECONDARY};
  --border: ${Color.COLOR_MAIN};
`;

export const lightTheme = css`
  --primary-text: ${Color.PRIMARY};
  --primary-bg: ${Color.WHITE};
  --secondary: ${Color.WHITE};
  --secondary-btn: ${Color.COLOR_MAIN};
  --border: ${Color.COLOR_MAIN};
`;

