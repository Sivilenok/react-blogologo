import { css } from "styled-components";

export const lightTheme = css`
  --primary-text: #313037;
  --primary-bg: #f3f3f3;
  --secondary-bg: #ffffff;
  --secondary-btn: rgba(49, 48, 55, 0.1);
  --border: rgba(49, 48, 55, 0.1);
`;

export const darkTheme = css`
  --primary-text: #ffffff;
  --primary-bg: #313037;
  --secondary-bg: rgba(255, 255, 255, 0.1);
  --secondary-btn: #313037;
  --border: rgba(255, 255, 255, 0.1);
`;
