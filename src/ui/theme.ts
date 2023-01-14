import { css } from "styled-components";

export const lightTheme = css`
  --primary-text: #313037;
  --primary-bg: #f3f3f3;
  --secondary-bg: #ffffff;
  --secondary-btn: rgba(49, 48, 55, 0.1);
  --border: rgba(49, 48, 55, 0.1);
  --text: rgba(49, 48, 55, 0.5);
  --select: #6C1BDB;

`;

export const darkTheme = css`
  --primary-text: #ffffff;
  --primary-bg: #313037;
  --secondary-bg: rgba(255, 255, 255, 0.1);
  --secondary-btn:  rgba(255, 255, 255, 0.1);
  --border: rgba(255, 255, 255, 0.1);
  --text: rgba(255, 255, 255, 0.5);
  --select: rgba(255, 255, 255, 0.5);
`;
