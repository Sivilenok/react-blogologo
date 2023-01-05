import { ThemeButton } from "../ThemeButton/ThemeButton";
import { StyledFooter, StyledText, StyledWrapper } from "./styles";

export const Footer = () => (
  <StyledFooter>
    <StyledWrapper>
      <StyledText>©2022 Blogolog</StyledText>
      <ThemeButton type="checkbox"/>
    </StyledWrapper>
  </StyledFooter>
);
