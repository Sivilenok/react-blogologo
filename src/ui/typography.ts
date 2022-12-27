import { css } from "styled-components";
import { Media } from "./media";

const h1 = css`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  ${Media.MD} {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  ${Media.SM} {
    font-size: 32px;
    line-height: 48px;
  }
`;

const h2 = css`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  ${Media.SM} {
    font-size: 24px;
    line-height: 36px;
  }
`;

const h3 = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`;

const s1 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  ${Media.SM} {
    font-weight: 400;
  }
`;

const b1 = css`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  ${Media.SM} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const b2 = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const typography = { h1, h2, h3, s1, b1, b2 };