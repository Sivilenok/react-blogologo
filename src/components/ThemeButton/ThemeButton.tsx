import { useEffect, useState } from "react";
import { StyledText, StyledTheme, Label, StyledSwitch } from "./styles";

interface IProps {
  type: string;
}

export const ThemeButton = ({ type }: IProps) => {
  const [isDark, setIsDark] = useState(false);
  const handleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <StyledTheme>
      <StyledText>Dark Theme</StyledText>
      <StyledSwitch>
        <input readOnly type="checkbox" checked={isDark}/>
        <Label onClick={handleTheme} htmlFor="switcher"></Label>
      </StyledSwitch>
    </StyledTheme>
  );
};
