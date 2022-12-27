import { ThemeButton } from "../ThemeButton/ThemeButton";
import { StyledFooter, StyledRectangle, StyledText, StyledWrapper } from "./styles";

export const Footer = () => {

  return (
    <StyledFooter>
      <StyledRectangle />
      <StyledWrapper>
        <StyledText>©2022 Blogolog</StyledText>
        <ThemeButton type="checkbox"/>
      </StyledWrapper>
    </StyledFooter>
  );
};