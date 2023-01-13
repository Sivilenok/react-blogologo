import { FunctionComponent } from "react";
import { Period } from "store/slices/blogSlice/blogSlice";
import { StyledDateButton } from "./styles";

interface Props {
    active?: Period;
    onClick: (period: Period) => void;
}

export const DateButtons: FunctionComponent<Props> = ({ active, onClick }) => (
  <div>
    <StyledDateButton 
      active={active === Period.DAY}
      onClick={() => onClick(Period.DAY)}
    >
        Day
    </StyledDateButton>
    <StyledDateButton
      active={active === Period.WEEK}
      onClick={() => onClick(Period.WEEK)}
    >
        Week
    </StyledDateButton>
    <StyledDateButton
      active={active === Period.MONTH}
      onClick={() => onClick(Period.MONTH)}
    >
        Month
    </StyledDateButton>
    <StyledDateButton
      active={active === Period.YEAR}
      onClick={() => onClick(Period.YEAR)}
    >
        Year
    </StyledDateButton>
  </div>
);
